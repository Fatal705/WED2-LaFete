define(['app/models/GuestRepository'], function(GuestRepository) {
    'use strict';
    var GuestListController = function($scope, $routeParams, GuestRepository) {
        this.scope = $scope;
        this.scope.event = { id:$routeParams.eventId };
        GuestRepository.forEvent({ id:$routeParams.eventId },
            function(guests) {
                this.scope.guests = guests;
            }.bind(this));
    };
    return GuestListController;
});