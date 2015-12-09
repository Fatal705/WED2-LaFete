define(['app/models/Guest'], function(Guest) {
    'use strict';
    var GuestListController = function($scope, $routeParams, GuestRepository) {
        this.scope = $scope;
        this.scope.event = { id:$routeParams.eventId };
        GuestRepository.getForEvent({ id:$routeParams.eventId },
            function(guests) {
                this.scope.guests = guests;
            }.bind(this));
    };
    return GuestListController;
});