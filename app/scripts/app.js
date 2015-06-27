'use strict';

/**
 * @ngdoc overview
 * @name greenComponentsApp
 * @description
 * # greenComponentsApp
 *
 * Main module of the application.
 */
angular
    .module('greenComponentsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'green.common.components.title'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: "main page"
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                title: ["$location", function($location) {
                    return $location.path() + " about us";
                }]
            })
            .otherwise({
                redirectTo: '/'
            });
    });
