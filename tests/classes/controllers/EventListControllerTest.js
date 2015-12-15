define(['app/controllers/event/ListController', 'libraries/angularMocks', 'frameworks/angular'], 
    function (EventListController, AngularMocks, Angular) {
    'use strict';

    var EventRepository, scope;

    beforeEach(AngularMocks.inject(function ($rootScope) {
        scope = $injector.get('$rootScope').$new();

        var events = [{id: 1, name: 'Meeting'},{id: 2, name: 'Party'}];

        // Mocking repository 
        EventRepository = {
            all: function(successCallback) {
                successCallback(events);
            }
        };
    }));     

    describe('EventListController', function() {
        describe('property scope', function() {
            it('contains 2 events', function() {
                var controller = new EventListController(scope, EventRepository);
                expect(controller.scope.events.length).toBe(2);
            });
            it('contains 2 events', function() {
                var controller = new EventListController(scope, EventRepository);
                expect(controller.scope.events[0].id).toBe(1);
            });
        });
    });
});