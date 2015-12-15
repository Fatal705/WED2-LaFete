define(['tests/factories/EventFactory', 'app/model/Event', 'app/repositories/EventRepository', 'libraries/angularMocks'],
    function (EventFactory, Event, EventRepository, AngularMocks) {
    'use strict';

    describe('EventRepository', function() {
        var event, Repository, $http, $httpBackend;

        beforeEach(AngularMocks.inject(function($injector) {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');

            Repository = new EventRepository($http);
            event = EventFactory.createEvent();
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('get()', function() {
            it('should return the correct object', function() {
                $httpBackend.expectGET(Repository.urls.get.replace('{eventId}', event.id)).respond(
                    JSON.stringify(event)
                );

                var newEvent = null;
                Repository.get(event, function(reqEvent) {
                    newEvent = reqEvent;
                    newEvent.begin = new Date(newEvent.begin);
                    newEvent.end = new Date(newEvent.end);
                }, function() {});
                $httpBackend.flush();
                expect(newEvent).toEqual(event);
            });
        });

        describe('all()', function() {
            it('returns an Array', function() {
                $httpBackend.expectGET(Repository.urls.all).respond({
                    events: [{id: 1, name: 'Meeting'},{id: 2, name: 'Party'}]
                });

                var events = null;
                Repository.all(function(eventList) {
                    events = eventList;
                }, function() {});
                $httpBackend.flush();
                expect(events).toEqual(jasmine.any(Array));
            });

            it('returns two events', function() {
                $httpBackend.expectGET(Repository.urls.all).respond({
                    events: [{id: 1, name: 'Meeting'},{id: 2, name: 'Party'}]
                });

                var events = null;
                Repository.all(function(eventList) {
                    events = eventList;
                }, function() {});
                $httpBackend.flush();
                expect(events.length).toEqual(2);
            });
        });

        describe('add()', function() {
            it('should return sent element', function() {
                var expectedPostData = JSON.stringify(event);
                $httpBackend.expectPOST(Repository.urls.add, expectedPostData).respond(
                    JSON.stringify(event)
                );

                var newEvent = false;
                Repository.add(event, function(reqEvent) {
                    newEvent = reqEvent;
                    newEvent.begin = new Date(newEvent.begin);
                    newEvent.end = new Date(newEvent.end);
                }, function() {});
                $httpBackend.flush();
                expect(newEvent).toEqual(event);
            });

            it('then get() should return the same object', function() {
                $httpBackend.expectGET(Repository.urls.get.replace('{eventId}', event.id)).respond(
                    JSON.stringify(event)
                );

                var newEvent = null;
                Repository.get(event, function(reqEvent) {
                    newEvent = reqEvent;
                    newEvent.begin = new Date(newEvent.begin);
                    newEvent.end = new Date(newEvent.end);
                }, function() {});
                $httpBackend.flush();
                expect(newEvent).toEqual(event);
            });
        });
    });
});