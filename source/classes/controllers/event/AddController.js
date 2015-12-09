define(['app/models/Event'], function(Event) {
    'use strict';
    var EventAddController = function($scope, $location, EventRepository) {

        this.scope = $scope;
        this.scope.event = new Event();

        this.scope.add = function(newEvent) {
            newEvent.times.begin = new Date(
                newEvent.times.begin.date.year,
                newEvent.times.begin.date.month,
                newEvent.times.begin.date.date,
                newEvent.times.begin.time.hours,
                newEvent.times.begin.time.minutes,
                0
            );
            newEvent.times.end = new Date(
                newEvent.times.end.date.year,
                newEvent.times.end.date.month,
                newEvent.times.end.date.date,
                newEvent.times.end.time.hours,
                newEvent.times.end.time.minutes,
                0
            );

            EventRepository.add(newEvent,
                function(event) {
                    $location.path('/events/'+event.id);
                }
            );
        };
    };

    return EventAddController;
});