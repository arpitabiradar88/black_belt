var mongoose = require("mongoose");

var Question = mongoose.model("Question");

module.exports = (function() {
    return {

        /****** Orders methods  ******/
        showQuestions: function(req, res) {

            // Show customer documents from the
            // "FullMean" Mongo database
            newQuestion.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show customers Errors:", err);
                }
                else {
                    res.json(results);
                }

            });
        },
        saveQuestion: function(req, res) {

            var newQuestion = new Question(req.body);

            newQuestion.save(function(err) {
                if(err) {
                    console.log("saveQuestion Server Controller errors:", question.errors);

                    res.json({title: "you have errors", errors: question.errors});
                }
                else {
                    // console.log("Order saved:", order);

                    console.log("Question added:", question);
                    res.send(true);
                }
            });

        },

        deleteQuestion: function(req, res) {

            newQuestion.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Question delete error:", err);
                }
                else {
                    console.log("Question deleted!");
                    res.redirect("/#question");
                }
            });
        }

    }

})();
