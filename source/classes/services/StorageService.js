define(['app/models/event'], function(Event) {
    'use strict';

    var StorageService = function() {
        this.events = (function() {
            var eventList = {};
            /**
             * Find event by identifier
             *
             * @param string identifier
             * @return Event or null
             */
            this.get = function(identifier) {
                // TODO
            };
            /**
             * Get all events
             *
             * @return Event[]
             */
            this.all = function() {
                // TODO. Use JavaScript map function instead of custom loop!
            };
            /**
             * Add event if not already in list
             * @param Event event
             * @return boolean if added successfull
             */
            this.add = function(event) {
                // TODO
            };
        })();
    };

    return StorageService;
});