define(['app/models/Guest'], function(Guest) {
    'use strict';

    var GuestRepository = function($http) {
        this.urls = {
            forEvent: '/api/events/{eventId}/guests',
            byId: '/api/events/{eventId}/guests/{guestId}',
        };

        this.getForEvent = function(event, successCallback) {
            $http.get(this.urls.forEvent.replace('{eventId}', event.id))
                .success(function(data) {
                    var guests = data.guests.map(function(guestDTO) {
                        return Guest.createFromDTO(guestDTO);
                    });
                    successCallback(guests);
                });
        };
        this.addForEvent = function(guest, event, successCallback) {
            $http.post(this.urls.forEvent.replace('{eventId}', event.id), guest)
                .success(function(guestDTO) {
                    successCallback(event);
                });
        };        
        this.getById = function(event, guest, successCallback) {
            $http.get(this.urls.byId.replace('{eventId}', event.id).replace('{guestId}', guest.id))
                .success(function(data) {
                    var guest = Guest.createFromDTO(data);
                    successCallback(guest);
                });
        };
        this.updateForEvent = function(guest, event, successCallback) {
            $http.post(this.urls.byId.replace('{eventId}', event.id).replace('{guestId}', guest.id), guest)
                .success(function(guestDTO) {
                    successCallback(event);
                });
        }; 
    };

    return GuestRepository;
});