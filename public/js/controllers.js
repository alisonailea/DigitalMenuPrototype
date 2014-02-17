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
        return '+'+count;
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

    $scope.placeOrder = function(){
      /* write logic to add to order JSON here */
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
    $scope.menuList = [
      {'name': 'Lasagna Classico', 'imgUrl': 'img/appetizer/Mushrooms.png',
       'description': 'Layers of pasta, meat sauce and mozzarella, ricotta, parmesan and romano cheese.',
       'cost': '15.99'},
      {'name': 'Eggplant Parmigiana', 'imgUrl': 'img/appetizer/Bread.png',
       'description': 'Lightly breaded eggplant, fried and topped with marinara sauce, mozzarella and parmesan cheese. Served with spaghetti.',
       'cost': '14.49'},
      {'name': 'Fettuccine Alfredo', 'imgUrl': 'img/appetizer/Antipasto.png',
       'description': 'Parmesan cream sauce with a hint of garlic, served over fettuccine.',
       'cost': '14.49'},
    ];
    $scope.updatePage('Entrees');
  }).
  /* Logic specific to the Dessert page. */
  controller('DessertCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = [
      {'name': 'Tiramisu', 'imgUrl': 'img/appetizer/Mushrooms.png',
       'description': 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
       'cost': '7.29'},
      {'name': 'Chocolate Mousse Cake', 'imgUrl': 'img/appetizer/Bread.png',
       'description': 'Rich chocolate brownie topped with a layer of creamy chocolate mousse.',
       'cost': '5.59'},
      {'name': 'Lemon Cream Cake', 'imgUrl': 'img/appetizer/Antipasto.png',
       'description': 'Delicate white cake and lemon cream filling with a vanilla crumb topping.',
       'cost': '7.29'},
    ];
    $scope.updatePage('Dessert');
  }).
  /* Logic specific to the Drink page. */
  controller('DrinkCtrl', function ($scope) {
    /* Data - this should be eventually pulled out to it's own JSON file 
       and called through an Angular service */
    $scope.menuList = [
      {'name': 'Pomegranate Gimlet', 'imgUrl': 'img/appetizer/Mushrooms.png',
       'description': 'LetherbeeGin, Pomegranate Maracschino, Lime.',
       'cost': '11.00'},
      {'name': 'Classic Bellini', 'imgUrl': 'img/appetizer/Bread.png',
       'description': 'White Peach, Prosecco.',
       'cost': '11.00'},
      {'name': 'Sicilian Mule', 'imgUrl': 'img/appetizer/Antipasto.png',
       'description': 'Averna, Cynar, Lemon, Ginger Beer.',
       'cost': '11.00'},
    ];
    $scope.updatePage('Drink');
  }).
  /* Logic specific to the Revew your Order page. */
  controller('ReviewOrderCtrl', function ($scope) {
    
    $scope.updatePage('Review Your Order');
  });
