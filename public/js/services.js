'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
	.factory('PostService', function($resource) {
		return $resource('/json/output/output.json');
		// console.log($resource);
	});