getdefine(['app/models/Event'], function(Event) {
    'use strict';

    var EventRepository = function($http) {
        this.urls = {
            all: '/api/events',
            get: '/api/events/{eventId}',
            add: '/api/events'
        };

        this.all = function(successCallback) {
            $http.get(this.urls.all)
                .success(function(data) {
                    var events = data.events.map(function(eventDTO) {
                        return Event.createFromDTO(eventDTO);
                    });
                    successCallback(events);
                });
        };
        this.get = function(event, successCallback) {
            $http.get(this.urls.get.replace('{eventId}', event.id))
                .success(function(eventDTO) {
                    var newEvent = Event.createFromDTO(eventDTO);
                    successCallback(newEvent);
                });
        };  
        this.add = function(event, successCallback) {
            $http.post(this.urls.add, event)
                .success(function(eventDTO) {
                    successCallback(Event.createFromDTO(eventDTO));
                });
        };        
  
    };

    return EventRepository;
});