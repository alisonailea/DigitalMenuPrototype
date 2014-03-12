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
      controller: 'HomeCtrl',
      depth: 1
    }).
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl',
      depth: 1
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl',
      depth: 3
    }).
    when('/aboutApp', {
      templateUrl: 'partials/aboutApp',
      controller: 'HelpCtrl',
      depth: 3
    }).
    when('/specials', {
      templateUrl: 'partials/menuItems',
      controller: 'SpecialCtrl',
      depth: 2
    }).
    when('/appetizer', {
      templateUrl: 'partials/menuItems',
      controller: 'AppetizerCtrl',
      depth: 2
    }).
    when('/entrees', {
      templateUrl: 'partials/menuItems',
      controller: 'EntreeCtrl',
      depth: 2
    }).
    when('/desserts', {
      templateUrl: 'partials/menuItems',
      controller: 'DessertCtrl',
      depth: 2
    }).
    when('/drinks', {
      templateUrl: 'partials/menuItems',
      controller: 'DrinkCtrl',
      depth: 2
    }).
    when('/reviewOrder', {
      templateUrl: 'partials/reviewOrder',
      controller: 'ReviewOrderCtrl',
      depth: 3
    }).
    when('/confirmOrder', {
      templateUrl: 'partials/confirmOrder',
      controller: 'ConfirmOrderCtrl',
      depth: 4
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
}).

run(function($rootScope, $window){
  $rootScope.direction = 'ltr';
  // listen change start events
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    $rootScope.direction = 'rtl';
   // console.log(arguments);
    if (current && next && (current.depth > next.depth)) {
      $rootScope.direction = 'ltr';  
    }
    // back
    $rootScope.back = function() {
      $window.history.back();
    }
  });
});
