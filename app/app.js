'use strict';

angular.module('myContacts', [
  'ngRoute',
  'firebase',
  'myContacts.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
