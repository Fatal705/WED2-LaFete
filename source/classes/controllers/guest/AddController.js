define(['app/models/Guest'], function(Guest) {
    'use strict';
    
    var GuestAddController = function($scope, $routeParams, $location, EventRepository) {

        this.scope = $scope;
        this.scope.guest = new Guest();

        this.scope.add = function(newGuest) {
            GuestRepository.addForEvent(newGuest, {id:$routeParams.eventId},
                function(event) {
                    $location.path('/events/'+event.id);
                }
            );
        };
    };

    return GuestAddController;
});