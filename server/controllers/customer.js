
// First add the following two lines at the top of the customers controller so that we can access our model through var Customer
// need to require mongoose to be able to run mongoose.model()
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = (function() {
    return {

        /****** Customers methods  ******/
        create: function(req, res) {
        	var newCustomer = new Customer(req.body);
			newCustomer.save(function(err, data) {
				if(err)
					console.log("user 10", err)
				else
					res.json(data)
			})
		},

		read: function(req, res) {
			Customer.find({}, function(err, data) {
				if(err)
					console.log("user 19", err)
				else
					res.json(data)
			})
		},

		readOne: function(req, res) {
			Customer.find({ _id: req.params.id }, function(err, data) {
				if(err)
					console.log("user 28", err);
				else
					res.json(data);
			})
        }
    }
})();