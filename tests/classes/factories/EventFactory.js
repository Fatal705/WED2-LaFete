define(['app/models/Event'], function (Event) {
    'use strict';

    var EventFactory = {
        createEvent: function() {
            return new Event('Meeting', 'Description', 'everyone', 'nothing',
                {
                    name: 'Hotel',
                    street: 'somewhere',
                    zipCode: 1234,
                    city: 'Somewhere'
                },
                {
                    begin: new Date('2015-10-10T12:00:00.000Z'),
                    end: new Date('2015-10-10T13:00:00.000Z')
                },
                12,
                {},
                null
            );
        }
    };

    return EventFactory;
});