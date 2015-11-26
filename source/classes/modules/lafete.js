define(['frameworks/angular', 'app/controllers/event/ListController', 'app/controllers/event/DetailController', 'app/services/StorageService', 'libraries/angularRoute'], function (Angular, EventListController, EventDetailController, StorageService) {
    'use strict';
    var Lafete = Angular.module("lafete", ['ngRoute']);

    Lafete.config(function($routeProvider) {
        $routeProvider.when('/events', {
            controller: 'EventListController',
            templateUrl: '/views/list.html'
        })
        .when('/events/:eventId', {
            controller: 'EventDetailController',
            templateUrl: '/views/detail.html'
        })
        .otherwise({
            redirectTo: '/events'
        });
    });

    Lafete.service('StorageService', StorageService);

    EventDetailController.$inject = ['$scope', '$routeParams', 'StorageService'];
    Lafete.controller('EventDetailController', EventDetailController);

    EventListController.$inject = ['$scope', 'StorageService'];
    Lafete.controller('EventListController', EventListController);
    return Lafete;
});