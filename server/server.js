var express = require('express');
var mongoose = require('mongoose');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


users= [];
connections = [] ;



// require your middleware and routes here
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


// =============================================================================
/*									Database								 */
// =============================================================================
var mongoURI = 'mongodb://smart:123@ds117830.mlab.com:17830/smartmobaily';
mongoose.connect(mongoURI);
var db = mongoose.connection;


// =============================================================================
/*									sockets								 */
// =============================================================================
var chatSchema = mongoose.Schema({
    user: String,
    msg: String
});

var Chat = mongoose.model('Message', chatSchema);

io.sockets.on('connection', function(socket){
	Chat.find({},function(err, docs){
		console.log(docs)
      if(err) throw err;
      socket.emit('load old messages', docs);
	})
	connections.push(socket);
	console.log('connected: %s socket connected', connections.length);

	//disconnect
	socket.on('disconnect', function(){
		users.splice(users.indexOf(socket.username), 1);
		updateUsernames();
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s socket disconnected', connections.length);	
	});
	socket.on('send message', function(data){
		console.log(data)
		var newMsg = new Chat ({msg: data, user:socket.username});
		newMsg.save(function(err){
			if (err) throw err
		io.sockets.emit('new message', {msg: data, user:socket.username});
		})
	});
	// New user
	socket.on('new user', function(data, callback){
		console.log("new user")
		callback(true);
		socket.username = data;
		users.push(socket.username);
		updateUsernames();
	});
	function updateUsernames(){
		io.sockets.emit('get users', users);
	}
});
// =============================================================================
/*									Server   								 */
// =============================================================================

mongoose.Promise = global.Promise
var port = process.env.PORT || 3000;
http.listen(port, function() {
	console.log('server now open on port ' + port);
});

module.exports = app;
