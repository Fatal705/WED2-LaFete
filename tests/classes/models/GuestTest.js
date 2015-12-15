define(['tests/factories/guestFactory','app/model/guest'],
    function(GuestFactory, Guest) {
    'use strict';

    describe('Guest', function() {
        var guest;

        beforeEach(function() {
            guest = new Guest("Dominik", "Beer", "Comment", false, null);
        });

        describe('Check name property', function(){
            it('Name is Dominik', function() {
                expect(guest.name).toEqual("Dominik");
            });
            it('Contribution is Beer', function() {
                expect(guest.contribution).toEqual("Beer");
            });
            it('Canceled is false', function() {
                expect(guest.canceled).toEqual(false);
            });
        });
    });
});