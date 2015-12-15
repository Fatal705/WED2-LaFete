define(['tests/factories/EventFactory', 'app/models/Guest', 'app/repositories/EventRepository', 'app/repositories/GuestRepository', 'libraries/angularMocks'],
    function (EventFactory, Guest, EventRepository, GuestRepository, AngularMocks) {
        'use strict';

        describe('GuestRepository', function() {
            var event, eventRepository, guest, guestRepository, $http, $httpBackend;

            beforeEach(AngularMocks.inject(function($injector) {
                $http = $injector.get('$http');
                $httpBackend = $injector.get('$httpBackend');

                eventRepository = new EventRepository($http);
                event = EventFactory.createEvent();

                guestRepository = new GuestRepository($http);
                guest = new Guest("Dominik", "Beer", "Comment", false, null);
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            describe('get()', function() {
                it('should return requested object', function() {
                    $httpBackend.expectGET(guestRepository.urls.byId.replace('{eventId}', event.id).replace('{guestId}', guest.id)).respond(
                        JSON.stringify(guest)
                    );

                    var newGuest = null;
                    guestRepository.getById(event, guest, function(reqGuest) {
                        newGuest = reqGuest;
                    }, function() {});
                    $httpBackend.flush();
                    expect(newGuest).toEqual(guest);
                });
            });

            describe('add()', function() {
                it('should return added object', function() {
                    var expectedPostData = JSON.stringify(guest);
                    $httpBackend.expectPOST(guestRepository.urls.forEvent.replace('{eventId}', event.id), expectedPostData).respond(
                        JSON.stringify(guest)
                    );

                    var status1 = false;
                    guestRepository.addForEvent(guest, event, function(reqGuest) {
                        if(reqGuest.id !== null)
                            status1 = true;
                    }, function() {});
                    $httpBackend.flush();
                    expect(status1).toBe(true);
                });

                it('then get() should return same object', function() {
                    $httpBackend.expectGET(guestRepository.urls.byId.replace('{eventId}', event.id).replace('{guestId}', guest.id)).respond(
                        JSON.stringify(guest)
                    );

                    var newGuest = null;
                    guestRepository.getById(event, guest, function(reqGuest) {
                        newGuest = reqGuest;
                    }, function() {});
                    $httpBackend.flush();
                    expect(newGuest).toEqual(guest);
                });
            });
        });
    });