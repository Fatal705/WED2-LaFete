define(['app/models/Guest'], function(Guest) {
    'use strict';

    var GuestRepository = function($http) {
        this.urls = {
            forEvent: '/api/events/{eventId}/guests',
        };

        this.getForEvent = function(successCallback) {
            $http.get(this.urls.forEvent.replace('{eventId}', event.id))
                .success(function(data) {
                    var guests = data.guests.map(function(guestDTO) {
                        return Guest.createFromDTO(guestDTO);
                    });
                    successCallback(guests);
                });
        };
        this.addForEvent = function(guest, event, successCallback) {
            $http.post(this.urls.forEvent.replace('{eventId}', event.id))
                .success(function(guestDTO) {
                    successCallback(event);
                });
        };        
  
    };

    return GuestRepository;
});