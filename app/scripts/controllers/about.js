'use strict';

/**
 * @ngdoc function
 * @name greenComponentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the greenComponentsApp
 */
angular.module('greenComponentsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
