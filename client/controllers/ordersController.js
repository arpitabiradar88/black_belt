customers_app.controller('ordersController', function($scope, QuestionFactory, CustomerFactory) {

    CustomerFactory.readCustomer(function(data){
        $scope.customer = data;
    });

    /****** Use OrderFactory ******/
    QuestionFactory.getQuestions(function(data) {
        $scope.questions = data;
        if($scope.questions) {
            $scope.questions.reverse();
        }
    });

    $scope.addQuestion = function() {        
        QuestionFactory.addQuestion($scope.newQuestion, function(errors) {
            $scope.errors = errors;

            QuestionFactory.getQuestions(function(data) {
                $scope.questions = data;
                $scope.questions.reverse();
            });

            console.log("$scope.newQuestion:", $scope.newQuestion);

            $scope.newQuestion = {};

        });
    };

});
