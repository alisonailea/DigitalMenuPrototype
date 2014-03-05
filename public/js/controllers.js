'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
  /* Global Logic for the Application */
  controller('AppCtrl', function ($scope, $http) {
    /* Service to get Data from the back end server.
       This is currently a placeholder */
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/api/navigation'
    }).
    success(function (data, status, headers, config) {
      $scope.linkList = data.navigation;
      // console.log(data.navigation);
    }).
    error(function (data, status, headers, config) {
      $scope.navigation = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/api/menu'
    }).
    success(function (data, status, headers, config) {
      $scope.menu = data.menu;
    }).
    error(function (data, status, headers, config) {
      $scope.menu = 'Error!';
    });

    /* Global Application Variables*/
    /* NOTE: With Angular all variables that you want to reference 
       in the HTML Model they have to start with $scope.
       Read more about Angular $scope at http://angularjs.org/ */
    $scope.orderItems = [];
    $scope.order = {total: '0.00', items: $scope.orderItems};
    $scope.pageName = 'Home';
    $scope.isHome = true;
    $scope.waitStaffCall = false;
    $scope.callWaiterClass = '';

    /* Global Application Functions */
    /* NOTE: With Angular all variables that you want to reference 
       in the HTML Model they have to start with $scope.
       Read more about Angular $scope at http://angularjs.org/ */

    var checkClick = function(element){
      // When bound to document it listens 
      var parentList = angular.element(element.toElement).parents();
      var isMenu = false;

      for(var i=0; i<parentList.length; i++){
        var bodyMatch = angular.element(parentList[i]).is('body');
        var classMatch = angular.element(parentList[i]).hasClass('show');
        var linkMatch = angular.element('a');

        if(bodyMatch){ break; }
        else {
          if(classMatch && !linkMatch){
            isMenu = true;
          }
        }
      }

      if(!isMenu){
        angular.element('.show').removeClass('show');
        document.removeEventListener('click');
      }
    };

    $scope.orderToolsShown = function(){
      if($scope.orderItems.length > 0){
        return true;
      } else {
        return false;
      }
    };

    $scope.checkPage = function(){
      var page = $scope.pageName;
      page = page.toLowerCase();
      if(page !== 'home'){
        return true;
      } else {
        return false;
      }
    }

    $scope.updatePage = function(pageName){
      $scope.pageName = pageName;
    };

    $scope.getQuantity = function(itemName){
      var order = $scope.orderItems;
      var count = 0;
      
      for(var item in order){
        item = order[item];
        if(item.name === itemName){
          return 'Quantity: +' + item.quantity;
        }
      }
    };

    $scope.addToOrder = function(name, cost, quantity) {
      /* Add an item object to the $scope.orderItems array */

      var order = $scope.orderItems;
      var newItem = true;

      for(var item in order){
        item = order[item];
        if(item.name === name){
          item.quantity += quantity;
          newItem = false;
        }
      }
 
      if (newItem){
        var orderItem = {name: name, cost: cost, quantity: quantity};
        order.push(orderItem);
      }

      $scope.updateTotal();
    };

    $scope.updateTotal = function(){
      /* 
        Every time something is added to the order add up 
        the cost of all the items in the users order 
      */
      var cost = 0;
      for(var item in $scope.orderItems){
        item = $scope.orderItems[item];
        var price = parseFloat(item.cost * item.quantity);
        cost += price;
      }
      $scope.order.total = cost.toFixed(2);
    };

    $scope.resetOrder = function(){
      /* Reset Application variables to defaults. */
      $scope.orderItems = [];
      $scope.order.total = '0.00';
    };

    $scope.openMenu = function(component){
      var element = angular.element('.'+component);
      element.addClass('show');

      document.addEventListener('mouseup', checkClick, false);
    };

    $scope.waiterCalled = function(){
      if($scope.waitStaffCall){
        return true;
      } else {
        return false;
      }
    };

    // $scope.waiterCalled = function(value){
    //   if(!value){
    //     return false;
    //   } else {  
    //     return true;
    //   }
    // };

    $scope.callWaiter = function(boolean, string){
      if(typeof boolean === "boolean"){
        $scope.waitStaffCall = boolean;
      }
      if(typeof string === "string"){
        $scope.callWaiterClass = string;
      }
    };

  }).
  /* Logic specific to the Home page. */
  controller('HomeCtrl', function ($scope) {
    $scope.isHome = true;
    $scope.updatePage('Home');
  }).
  /* Logic specific to the About page. */
  controller('AboutCtrl', function ($scope) {
    $scope.updatePage('About Us');
  }).
  /* Logic specific to the Special page. */
  controller('SpecialCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = $scope.menu.specials;

    $scope.updatePage('Appetizers');
  }).
  /* Logic specific to the Appetizer page. */
  controller('AppetizerCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = $scope.menu.appetizers;

    $scope.updatePage('Appetizers');
  }).
  /* Logic specific to the Entree page. */
  controller('EntreeCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = $scope.menu.entrees;

    $scope.updatePage('Entrees');
  }).
  /* Logic specific to the Dessert page. */
  controller('DessertCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = $scope.menu.desserts;

    $scope.updatePage('Desserts');
  }).
  /* Logic specific to the Drink page. */
  controller('DrinkCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = $scope.menu.drinks;

    $scope.updatePage('Drinks');
  }).
  /* Logic specific to the Revew your Order page. */
  controller('ReviewOrderCtrl', function ($scope, $location, PostService) {
    
    $scope.updatePage('Review Your Order');

    $scope.placeOrder = function() {
      // TODO:Imidently start loading icon //

      /* Use Factory method services.js to make RESTful call to the server */
      var orderData = $scope.order;
      PostService.save(orderData, function(data) {
          console.log(data);
          $location.path('/confirmOrder');
  });
    };
  }).
  /* Logic specific to the Confirm your Order page. */
  controller('ConfirmOrderCtrl', function ($scope) {
    $scope.updatePage('Order Confirmed');
  });
