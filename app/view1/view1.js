'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.d3', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  
}]);