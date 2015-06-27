'use strict';

/**
 * @ngdoc function
 * @name greenComponentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greenComponentsApp
 */
angular.module('greenComponentsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
