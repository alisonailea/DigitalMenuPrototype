'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  /* This is how we control links within the Application.
     This functions like a Switch statement. Just follow this template
     when (this is the name called by an html link's href="")
        templateUrl: (this is the location to a specific file in the view folder)
        controller: (controller name. Should match a controller in the js/controllers.js file)
  */
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    when('/appetizer', {
      templateUrl: 'partials/appetizer',
      controller: 'AppetizerCtrl'
    }).
    when('/entrees', {
      templateUrl: 'partials/entrees',
      controller: 'EntreeCtrl'
    }).
    when('/desserts', {
      templateUrl: 'partials/desserts',
      controller: 'DessertCtrl'
    }).
    when('/drinks', {
      templateUrl: 'partials/drinks',
      controller: 'DrinkCtrl'
    }).
    when('/reviewOrder', {
      templateUrl: 'partials/reviewOrder',
      controller: 'ReviewOrderCtrl'
    }).
    when('/confirmOrder', {
      templateUrl: 'partials/confirmOrder',
      controller: 'ConfirmOrderCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
