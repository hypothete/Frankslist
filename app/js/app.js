
// Declare app level module which depends on filters, and services

var app = angular.module("consoleApp", ["$strap.directives"]);


app.config(function($routeProvider){
	$routeProvider.when('/',
	{
		templateUrl:"partials/start.html",
		controller:"startCtrl"
	})
	.when('/house',
	{
		templateUrl:"partials/house.html",
		controller:"houseCtrl"
	})
	.when('/list',
	{
		templateUrl:"partials/list.html",
		controller:"listCtrl"
	})
	.otherwise({redirectTo: '/'});
})