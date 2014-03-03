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

    // $scope.getIcon = function(){
    //   var page = $scope.pageName;
    //   var icon;
    //   switch ($scope.pageName) {
    //     case 'Home':
    //       icon = 'icon-arrow-down4';
    //       break;
    //     case 'Review Your Order':
    //       icon = 'icon-arrow-up4';
    //       break;
    //     default:
    //       icon = 'icon-menu';
    //       break;
    //   }
    //   return icon;
    // };

    $scope.updatePage = function(pageName){
      $scope.pageName = pageName;
    };

    $scope.getQuantity = function(itemName){
      /* Show the quantity of each item already in the users order (if it's more than 0)*/
      var count = 0;
      for (var i = $scope.orderItems.length - 1; i >= 0; i--) {
        if ($scope.orderItems[i].name === itemName){
          count += 1;
        }
      }
      if (count > 0){
        return 'Quantity: +'+count;
      }
    };

    $scope.addToOrder = function(name, cost, quantity) {
      /* Add an item object to the orderItems array */
      var order = $scope.orderItems;
      var orderItem = {name: name, cost: cost, quantity: quantity};
      order.push(orderItem);

      $scope.updateTotal();
    };

    $scope.updateTotal = function(){
      /* Every time something is added to the order 
         add up the cost of all the items in the users order */
      var cost = 0;
      for (var i = $scope.orderItems.length - 1; i >= 0; i--) {
          var ammount = parseFloat($scope.orderItems[i].cost);
          cost += ammount;
        }
      $scope.order.total = cost.toFixed(2);
    };

    $scope.resetOrder = function(){
      /* Reset Application variables to defaults. */
      $scope.orderItems = [];
      $scope.order.total = '0.00';
    };

    $scope.openMenu = function(component){
      console.log(component);
      var element = angular.element('.'+component);
      element.addClass('show');

      document.addEventListener('mouseup', checkClick, false);
    };

  }).
  /* Logic specific to the Home page. */
  controller('HomeCtrl', function ($scope) {
    
    $scope.updatePage('Home');
  }).
  /* Logic specific to the About page. */
  controller('AboutCtrl', function ($scope) {
    $scope.updatePage('About Us');
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
  controller('ReviewOrderCtrl', function ($scope, PostService) {
    
    $scope.updatePage('Review Your Order');

    $scope.placeOrder = function() {
      /* Use Factory method services.js to make RESTful call to the server */
        var stuff = $scope.order;
        PostService.save(stuff, function(data) {
            console.log(data);
        });
    };
  });
