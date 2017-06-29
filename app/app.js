'use strict';

angular.module('myContacts', [
  'ngRoute',
  'myContacts.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
