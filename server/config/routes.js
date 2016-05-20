// server routes

// First at the top of your routes.js file you'll have to require the controller
var customer = require("./../controllers/customer.js");
var questions = require("./../controllers/questions.js");

// This is our routes.js file located in /config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it a
module.exports = function(app) {
    // Show the home page
    app.get("/", function(req, res) {
        res.render("index");
    });

    // AND index page
    app.get("/customer", function(req, res) {
        customer.read(req, res);            
    });

    // Save a customer
    app.post("/customer", function(req, res) {
        customer.create(req, res);
    });

    app.get('/customer/:id', function(req, res) {
		customer.readOne(req, res);
	});

    // Delete a customer
    app.get("/destroy/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            customer.deleteCustomer(req, res);
        }
    });

    // Show a customer to update
    app.get("/customer/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            customer.showSingleCustomer(req, res);
        }
    });

    // Update a customer
    app.post("/customer/update/:id", function(req, res) {
        customer.updateSingleCustomer(req, res);
    });

    /****** questions collection actions ******/

    // Show all questions
    app.get("/questionsObjects", function(req, res) {  
        questions.showQuestions(req, res);
    });

    // Save an question
    app.post("/saveQuestion", function(req, res) {
        questions.saveQuestion(req, res);
    });

    app.get("/destroy/question/:id", function(req, res) {
        questions.deleteQuestion(req, res);
    });

 
    app.post("/destroy/question", function(req, res) {
        questions.deleteQuestion(req, res);
    });

};