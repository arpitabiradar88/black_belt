// client factory

// create the CustomerFactory and pass in the "$http" service/function
customers_app.factory("CustomerFactory", function($http, $location) {
    var factory = {};
    var thisCustomer = null;
    factory.readCustomers = function(customer, callback) {
		var newCustomer = true;
		$http.get('/customer').success(function(data) {
			angular.forEach(data, function(regCustomer) {
				if(customer.name == regCustomer.name) {
					console.log(customer.name, "matches", regCustomer.name);
					newCustomer = false;
					thisCustomer = regCustomer
					$location.path('/dashboard');
				};	
			});
// If user does not exist, create new user and redirect to dashboard
			if(newCustomer == true) {	
				console.log("Customer is new, Creating...");
				$http.post('/customer', customer).success(function(data) {
					console.log("New customer has been created...")
					thisCustomer = data;
					$location.path('/dashboard');
				});
			};
		});
		callback(thisCustomer);	
	};

	factory.readCustomer = function(callback) {
		callback(thisCustomer);
	};


	factory.viewCustomer = function(id, callback) {
		$http.get('/customer/'+id).success(function(data) {
			callback(data[0]);
		});
	};			   

    return factory;
});




