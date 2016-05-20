//client controller
customers_app.controller("customersController", function($scope, $routeParams, CustomerFactory) {

    $scope.currentDate = Date.now();

    $scope.multipleErrors = [];

    var id = $routeParams.id;

    var id = $routeParams.id;
    
    $scope.checkCustomer = function(customer) {
        CustomerFactory.readCustomers(customer, function(data) {
        });
    };

    CustomerFactory.viewCustomer(id, function(data) {
        $scope.customer = data;
    });

});