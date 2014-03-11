'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
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
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    when('/aboutApp', {
      templateUrl: 'partials/aboutApp',
      controller: 'AboutCtrl'
    }).
    when('/specials', {
      templateUrl: 'partials/menuItems',
      controller: 'SpecialCtrl'
    }).
    when('/appetizer', {
      templateUrl: 'partials/menuItems',
      controller: 'AppetizerCtrl'
    }).
    when('/entrees', {
      templateUrl: 'partials/menuItems',
      controller: 'EntreeCtrl'
    }).
    when('/desserts', {
      templateUrl: 'partials/menuItems',
      controller: 'DessertCtrl'
    }).
    when('/drinks', {
      templateUrl: 'partials/menuItems',
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
