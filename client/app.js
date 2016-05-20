// client app.js

// Lets create our angular module
var customers_app = angular.module("customers_app", ["ngRoute"]);

// Get routes for partials
customers_app.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "partials/login.html",
            controller: "customersController"
        })
        .when("/dashboard", {
            templateUrl: "partials/dashboard.html",
            controller: "ordersController"
        })
        .when("/questions", {
            templateUrl: "partials/questions.html",
            controller: "ordersController"
        })
        .otherwise({
            redirectTo: "/"
        });

});