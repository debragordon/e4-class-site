"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeCtrl'
        })
        .otherwise('/home');
});
