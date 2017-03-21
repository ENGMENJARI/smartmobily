var app = angular.module('MobileSmart.chat', []);
app.controller('chatCtrl', function($scope, serv) {
  $scope.socket = io.connect('https://young-depths-40849.herokuapp.com');
  $scope.message = $('#message');
  $scope.$chat = $('#chat');
  $scope.messageArea = $('#messageArea');
  $scope.users = $('#users')
  $scope.username = $('#username');
  
  $scope.socket.on('new message', function(data){
   $scope.displayMsg(data)
  /* $scope.remove();*/
  });


    $scope.socket.on('load old messages', function(docs){
      console.log(docs)
      for (var i = 0; i < docs.length; i++) {
      $scope.displayMsg(docs[i]) 
    }
  });
  $scope.chat =function(){
   $scope.socket.emit('new user', $scope.username.val(), function(data){
     if(data){
      $scope.messageArea.show();
    }
  });
   $scope.username.val('');
   $scope.socket.on('get users', function(data){

    var html = '';
    for (var i = 0; i < data.length; i++) {
      html += '<li class="list-group-item">'+data[i]+'</li>';
    }
    $scope.users.html(html);
  });
 }
 $scope.displayMsg = function(data) {
 
  $scope.$chat.append('<div class="well"><strong>'+data.user+'</strong>:'+data.msg+'</div>')
}

$scope.reciveMessage = function(){
  
  $scope.socket.emit('send message', $scope.message.val());
  $scope.message.val('')
  
}
     
/*$scope.remove=function(){
  $scope.socket.off('new message')
}*/
})
