define(['app/models/EventRepository'], function(EventRepository) {
    'use strict';
    var EventAddController = function($scope, $location, EventRepository) {

        this.scope = $scope;
        this.scope.event = new Event();

        this.scope.add = function(newEvent) {
            newEvent.times.begin = new Date(
                newEvent.times.begin.date.getFullYear(),
                newEvent.times.begin.date.getMonth(),
                newEvent.times.begin.date.getDate(),
                newEvent.times.begin.time.hours,
                newEvent.times.begin.time.minutes,
                0
            );
            newEvent.times.end = new Date(
                newEvent.times.end.date.getFullYear(),
                newEvent.times.end.date.getMonth(),
                newEvent.times.end.date.getDate(),
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