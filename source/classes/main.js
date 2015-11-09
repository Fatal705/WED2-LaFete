require.config({
    baseUrl: './',
    paths: {
        'frameworks/angular': 'frameworks/angular/angular.min',
        'app': 'classes'
    },
    shim: {
        'frameworks/angular': {
            exports: 'angular'
        }
    }
});

require(['frameworks/angular', 'app/modules/lafete'], function (Angular, Lafete) {
    Angular.element(document).ready(function() {
        Angular.bootstrap(document, [Lafete.name]);
    });

});
