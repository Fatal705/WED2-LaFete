define(['app/models/event'], function(Event) {
    'use strict';
    var EventListController = function($scope){
        this.scope = $scope;
        this.scope.events = [
            new Event('Meeting', '', 'everyone', 'nothing',
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
                12
            ),
            new Event('Birthday', '', 'everyone', 'nothing',
                {
                    name: 'Home',
                    street: 'Anyway',
                    zipCode: 8000,
                    city: 'Zürich'
                },
                {
                    begin: new Date('2015-04-05T18:00:00.000Z'),
                    end: new Date('2015-04-05T20:00:00.000Z')
                },
                30
            ),
            new Event('Bar', '', 'everyone', 'nothing',
                {
                    name: 'Bar',
                    street: 'cantremember',
                    zipCode: 4321,
                    city: 'remember'
                },
                {
                    begin: new Date('2015-12-08T17:00:00.000Z'),
                    end: new Date('2015-12-08T19:00:00.000Z')
                },
                60
            )
        ];
    };
    return EventListController;
});