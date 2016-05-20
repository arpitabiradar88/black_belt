// client factory
customers_app.factory("QuestionFactory", function($http) {
    var factory = {};
    var currentUser = null;

    factory.getQuestions = function(callback) {
        $http.get("/questionsObjects").success(function(output) {
            callback(output);
        });
    };

    factory.addQuestion = function(newQuestion, callback) {
        $http.post("/saveQuestion", newQuestion).success(function(info) {
            questions.push({name: info.name, question: info.question});
            callback(info);

            console.log(questions);

        });
    };

    return factory;
});
