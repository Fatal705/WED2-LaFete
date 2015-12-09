define(['app/models/Guest'], function(Guest) {
    'use strict';
    
    var GuestAddController = function($scope, $routeParams, $location, GuestRepository) {

        this.scope = $scope;
        this.scope.guest = new Guest();
        if($routeParams.guestId !== undefined){
            GuestRepository.getById({id:$routeParams.eventId}, { id:$routeParams.guestId},
                function(guest) {
                    this.scope.guest = guest;
                    this.scope.edit = true;
                }
            );
        }

        this.scope.add = function(newGuest, edit) {
            if(edit){
                GuestRepository.updateForEvent(newGuest, {id:$routeParams.eventId});
            }
            GuestRepository.addForEvent(newGuest, {id:$routeParams.eventId},
                function(event) {
                    $location.path('/events/'+event.id);
                }
            );
        };
    };

    return GuestAddController;
});