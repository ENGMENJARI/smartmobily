'use strict';

console.log("smthg is here")
describe('Services', function () {
  beforeEach(module('MobileSmart.services'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('serv Factory', function () {
    var $httpBackend, serv;

    beforeEach(inject(function (_$httpBackend_, _serv_) {
      $httpBackend = _$httpBackend_;
      serv = _serv_;
    }));

    it('should exist', function () {
      expect(serv).to.exist;
    });

    it('should have a method `insertMobile`', function () {
      expect(serv.insertMobile).to.be.a('function');
    });
    it('should have a method `getAllMobile`', function () {
     expect(serv.getAllMobile).to.be.a('function');
   });
    it('should have a method `signout`', function () {
     expect(serv.signout).to.be.a('function');
   });

    // it('should get all Mobile with `getAllMobile`', function () {

     // /$httpBackend.expect('GET', '/api/mobilesAll/').respond(200 );

    //   serv.getAllMobile().then(function (Mobiles) {
    //     expect(Mobiles).to.deep.equal(Array);
    //   });

     // $httpBackend.flush();
   });

    // it('should add a new link with `addOne`', function () {
    //   var github = { url: 'https://github.com/reactorcore' };

    //   $httpBackend
    //     .expect('POST', '/api/links', JSON.stringify(github))
    //     .respond(201, {
    //       url: 'https://github.com/reactorcore',
    //       title: 'reactorcore'
    //     });

    //   Links.addOne(github).then(function (resp) {
    //     expect(resp.status).to.equal(201);
    //     expect(resp.data.title).to.equal('Hack Reactor Labs');
    //   });

    //   $httpBackend.flush();
    // });

  });

//});


