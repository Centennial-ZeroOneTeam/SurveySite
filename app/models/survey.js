let mongoose = require('mongoose');

let surveyModel = mongoose.Schema(
    {
        surveyID: String,
        title: String,
        startDate: String,
        endDate: String,
        active: Boolean,
        questions: [{
            title: String,
            questionType: String,
            answer: String,
            answers: [String]
        }],
        result: [{
            questionTitle: String,
            answerSelected: String
        }]

    },
    {
        collection: "survey"
    });


module.exports = mongoose.model('Survey', surveyModel);