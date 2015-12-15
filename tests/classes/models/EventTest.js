define(['app/models/Event', 'tests/factories/EventFactory'], 
    function (Event, EventFactory) {
    'use strict';


    describe('Event', function() {
        var event;

        beforeEach(function() {
            event = EventFactory.createEvent();
        });  
        
        it('Expects event id to be UUID', function() {
            var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
            expect(event.id).toMatch(uuidRegex);
        });
    });
});