define(['app/model/event', 'app/services/storageService', 'tests/factories/EventFactory'], function (Event, StorageService, EventFactory) {
    'use strict';

    describe('EventStorageService test suite', function() {
        var event, storageService;

        beforeEach(function() {
            storageService = new StorageService();
            event = EventFactory.createEvent();
        });

        describe('get()', function() {
            beforeEach(function() {
                // TODO
            });

            describe('by object id', function() {
                it('returns the object', function() {
                    // TODO
                });
            });

            describe('by inexistent object id', function() {
                it('returns null', function() {
                    // TODO
                });
            });
        });


        describe('all()', function() {
            it('returns an Array', function() {
                // TODO
            });
        });

        describe('add()', function() {
            it('inserts element', function() {
                // TODO
            });

            describe('same element again', function() {
                // TODO

                beforeEach(function() {
                    // TODO
                });

                it('doesn\'t affect repository size', function() {
                    // TODO
                });

                it('returns false', function() {
                    // TODO
                });
            });
        });
    });
});