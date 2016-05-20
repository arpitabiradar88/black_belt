var mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema({
    name: { type: String },
    question: String,
    created_at: {type: Date, default: Date.now}
});

// Order form validation
mongoose.model("Question", QuestionSchema);