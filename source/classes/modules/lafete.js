define(['frameworks/angular', 'app/controllers/EventListController'], function (Angular, EventListController) {
    'use strict';
    var Lafete = Angular.module("lafete", []);
    EventListController.$inject = ['$scope'];
    Lafete.controller('EventListController', EventListController);
    return Lafete;
});