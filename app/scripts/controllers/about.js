/**
 * @ngdoc function
 * @name myWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myWebApp
 */
(function () {
    'use strict';


angular.module('myWebApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
}());