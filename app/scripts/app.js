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
        'green.common.components.title',
        'green.common.components.treeView'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: "main page"
            })
            .when('/treeView', {
                templateUrl: 'views/treeView.html',
                controller: 'TreeViewCtrl',
                title: "Tree View Demo"
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
