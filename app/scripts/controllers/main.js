/**
 * @ngdoc function
 * @name myWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myWebApp
 */
(function () {
    'use strict';


angular.module('myWebApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
}());