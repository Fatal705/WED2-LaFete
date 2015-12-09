define(['app/services/UuidService'], function(UuidService) {
    'use strict';

    var Guest = function(name, contribution, comment, canceled, id) {
        this.id = id || UuidService.getRandomUuid();
        this.name = name;
        this.contribution = contribution;
        this.comment = comment;
        this.canceled = canceled || false;

    };
    
    Guest.createFromDTO = function(jsonData) {
        return new Guest(
            jsonData.name,
            jsonData.contribution,
            jsonData.comment,
            jsonData.canceled,
            jsonData.id
        );
    };

    return Guest;
});