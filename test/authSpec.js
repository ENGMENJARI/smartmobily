'use strict';

// describe('AuthController', function () {
//   var $scope, $rootScope, $location, $window, $httpBackend, createController, Auth;

//   // using angular mocks, we can inject the injector
//   // to retrieve our dependencies
//   beforeEach(module('MobileSmart'));
//   beforeEach(inject(function ($injector) {

//     // mock out our dependencies
//     $rootScope = $injector.get('$rootScope');
//     $location = $injector.get('$location');
//     $window = $injector.get('$window');
//     $httpBackend = $injector.get('$httpBackend');
//     serv = $injector.get('serv');
//     $scope = $rootScope.$new();

//     var $controller = $injector.get('$controller');

//     // used to create our AuthController for testing
//     createController = function () {
//       return $controller('singupCtrl', {
//         $scope: $scope,
//         $window: $window,
//         $location: $location,
//         serv: serv
//       });
//     };

//     createController();
//   }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $window.localStorage.removeItem('MobileSmart');
  });

  it('should have a signup method', function () {
    expect($scope.signup).to.be.a('function');
  });

  it('should store token in localStorage after signup', function () {
    // create a fake JWT for auth
    var token = 'sjj232hwjhr3urw90rof';

    // make a 'fake' reques to the server, not really going to our server
    $httpBackend.expectPOST('/api/users/signup').respond({token: token});
    $scope.signup();
    $httpBackend.flush();
    expect($window.localStorage.getItem('MobileSmart')).to.equal(token);
  });

  it('should have a signin method', function () {
    expect($scope.signin).to.be.a('function');
  });

  it('should store token in localStorage after signin', function () {
    // create a fake JWT for auth
    var token = 'sjj232hwjhr3urw90rof';
    $httpBackend.expectPOST('/api/users/signin').respond({token: token});
    $scope.signin();
    $httpBackend.flush();
    expect($window.localStorage.getItem('MobileSmart')).to.equal(token);
  });
});
