define(['frameworks/angular', 'app/controllers/guest/ListController',  'app/controllers/event/ListController', 'app/controllers/event/DetailController', 'app/controllers/guest/AddController', 'app/controllers/event/AddController', 'app/services/EventRepository', 'app/services/GuestRepository', 'libraries/angularRoute'], 
       function (Angular, GuestListController, EventListController, EventDetailController, GuestAddController, EventAddController, EventRepository, GuestRepository) {
    'use strict';
    
    var Lafete = Angular.module("lafete", ['ngRoute']);

    Lafete.config(function($routeProvider) {
        $routeProvider.when('/events', {
            controller: 'EventListController',
            templateUrl: '/views/listEvents.html'
        })
        .when('/events/:eventId', {
            controller: 'EventDetailController',
            templateUrl: '/views/eventDetail.html'
        })
        .when('/events/:eventId/guests', {
            controller: 'GuestListController',
            templateUrl: '/views/listGuests.html'
        })
        .when('/events/add', {
            controller: 'EventAddController',
            templateUrl: '/views/addEvent.html'
        })
        .when('/events/:eventId/add', {
            controller: 'GuestAddController',
            templateUrl: '/views/addGuest.html'
        })
        .otherwise({
            redirectTo: '/events'
        });
    });

    EventRepository.$inject = ['$http'];
    Lafete.service('EventRepository', EventRepository);

    GuestListController.$inject = ['$scope', '$routeParams', 'GuestRepository'];
    Lafete.controller('GuestListController', GuestListController);

    GuestAddController.$inject = ['$scope', '$routeParams', '$location', 'GuestRepository'];
    Lafete.controller('GuestAddController', GuestAddController);

    EventDetailController.$inject = ['$scope', '$routeParams', 'EventRepository'];
    Lafete.controller('EventDetailController', EventDetailController);

    EventAddController.$inject = ['$scope', '$location', 'EventRepository'];
    Lafete.controller('EventAddController', EventAddController);

    EventListController.$inject = ['$scope', 'EventRepository'];
    Lafete.controller('EventListController', EventListController);


    return Lafete;
});