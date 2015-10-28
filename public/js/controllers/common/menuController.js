
define([ 'angular', 'app', 'services/menu' ], function(angular, app) {
  'use strict';
  var forEach = angular.forEach;
  var isDefined = angular.isDefined;
  app.controller('common/menuController',
      ['$scope',
      function($scope) {
        console.log("menuController");

      }]);
});
