define(['app/models/EventRepository'], function(EventRepository) {
    'use strict';
    var EventListController = function($scope, EventRepository) {
        this.scope = $scope;
        EventRepository.all(
            function(events) {
                this.scope.events = events;
            }.bind(this));
    };
    return EventListController;
});