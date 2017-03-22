var app = angular.module('MobileSmart.load', []);

/*
angular.module('controllers', [])
    .controller('myCtrl', [function($scope, resolvedVal) { $scope.answer = resolvedVal; }]);
*/

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/resolveView', {
            templateUrl: 'resolveView.html',
            controller: 'resolveCtrl',
            resolve: {
                resolvedVal: function() {
                  console.log('a');
                    return 'Karl';
                }
            }}
          );
    }]);
    
app.controller('MainCtrl', function($scope, $location) {
});

app.controller('resolveCtrl', function($scope, resolvedVal) {
  console.log('b');
  console.log(resolvedVal);
  
});
