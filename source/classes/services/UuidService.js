define([], function() {
    'use strict';

    var UuidService = {};
    
    UuidService.getRandomUuid = function() {
        var uuidScheme = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var timestamp = new Date().getTime();

        return uuidScheme.replace(/[xy]/g, function(character) {
            var randomNumber = (timestamp + Math.random()*16)%16 | 0;
            timestamp = Math.floor(timestamp/16);
            return (character == 'x' ? randomNumber : (randomNumber&0x3|0x8)).toString(16);
        });
    };

    return UuidService;
});