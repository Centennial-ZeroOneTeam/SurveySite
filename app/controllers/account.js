/*
Created by Sabeen
Updated by Stanley
Last update date: Jul 28
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let SurveyInfo = require('../models/survey');

/* Stanley added 20220727 */
// Login
module.exports.displayLoginPage = (req, res, next) => {
    res.render('account/auth/login', {title: 'Login'});
}
module.exports.processLoginPage = (req, res, next) => {
    console.log(req.body);

    res.redirect('/account');
}
// Register
module.exports.displayRegisterPage = (req, res, next) => {
    res.render('account/auth/register', {title: 'Register'});
}
module.exports.processRegisterPage = (req, res, next) => {
    console.log(req.body);

    res.redirect('/account');
}


// My Survey
module.exports.displaySurveyListPage = (req, res, next) => {

    SurveyInfo.find((err, surveyList) => {
        let username = "Username"
        if (err) {
            return console.error(err);
        } else {
            res.render('account/listSurvey', {
                title: 'Welcome back! ' + username,
                surveyList: surveyList
            });
        }
    });

}
module.exports.displayAddSurveyPage = (req, res, next) => {
    res.render('account/addSurvey', {
        title: 'Create Survey'
    });
}
module.exports.processAddSurvey = (req, res, next) => {
    console.log(req.body);

    let newSurvey = SurveyInfo({
        "surveyID": req.body.id,
        "title": req.body.title,
        // "questions": req.body.questions
    });


    console.log(newSurvey);



    SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/account');
        }
    });
}

module.exports.displayEditSurveyPage = (req, res, next) => {
    let survey = {
        "title": String,
        "dateStart": req.body.dateStart,
        "dateEnd": req.body.dateEnd,
        "isActive": req.body.isActive,
        "questions": []
    };

    res.render('account/editSurvey', {
        title: 'Edit Survey',
        surveyInfo: survey
    });
}
module.exports.processEditSurvey = (req, res, next) => {
    console.log(req.body);

    res.redirect('/account');
}
module.exports.processDeleteSurvey = (req, res, next) => {
    res.redirect('/account');
}

// View result
module.exports.displayResultSurveyListPage = (req, res, next) => {
    let resultList = ['a', 'b', 'c', 'd'];

    res.render('account/resultList', {
        title: 'Submited Surveys',
        resultList: resultList
    });
}
module.exports.displayResultSurveyDetailPage = (req, res, next) => {
    let survey = {
        "title": String,
        "dateStart": req.body.dateStart,
        "dateEnd": req.body.dateEnd,
        "isActive": req.body.isActive,
        "questions": []
    };

    res.render('account/resultDetail', {
        title: 'Submited Survey\'s Result',
        surveyInfo: survey
    });
}


/* end. Stanley */

// module.exports.displayAddPage = (req, res, next) => {
//     res.render('account/add', {title: 'Add Question'})
// }

// module.exports.processAddPage = (req, res, next) => {
//     let newSurvey = SurveyInfo({
//         "surveyID": req.body.id,
//         "question": req.body.question,
//     });

//     SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             res.redirect('/account');
//         }
//     });
// }

// module.exports.performDelete = (req, res, next) => {
//     let id = req.params.id;

//     SurveyInfo.remove({_id: id}, (err) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             res.redirect('/account');
//         }
//     });
// }

// module.exports.displayEditPage = (req, res, next) => {
//     let id = req.params.id;

//     SurveyInfo.findById(id, (err, surveyToEdit) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             res.render('account/edit', {title: 'Edit Question', survey: surveyToEdit})
//         }
//     });
// }

// module.exports.processEditPage = (req, res, next) => {
//     let id = req.params.id

//     let updatedSurvey = SurveyInfo({
//         "_id": req.params.id,
//         "question": req.body.question,
//     });

//     SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
//         if (err) {
//             console.log(err);
//             res.end(err);
//         } else {
//             res.redirect('/account');
//         }
//     });
// }


// module.exports.displayAddMcQuestion = (req, res, next) => {
//     // new empty data
//     let question = {
//         title: '',
//         answer: []
//     };

//     res.render('survey/mcQuestion', {
//         title: 'Create MC Question',
//         question: question
//     })
// }

// module.exports.displayEditMcQuestion = (req, res, next) => {
//     let id = req.params.id;

//     // SurveyInfo.findById(id, (err, surveyToEdit) => {
//     let question = { // should get data from db by id
//         title: 'demo',
//         answer: ['ans1', 'ans2']
//     };

//     res.render('survey/mcQuestion', {
//         title: 'Edit MC Question',
//         question: question
//     })
// }

// module.exports.processAddMcQuestion = (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/account');
// }

// module.exports.processEditMcQuestion = (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/account');
// }

// module.exports.displayAddSingleTextQuestion = (req, res, next) => {
//     // new empty data
//     let question = {
//         title: '',
//     };

//     res.render('account/singleTextQuestion', {
//         title: 'Create Single Text Question',
//         question: question
//     })
// }

// module.exports.displayEditSingleTextQuestion = (req, res, next) => {
//     let id = req.params.id;

//     // SurveyInfo.findById(id, (err, surveyToEdit) => {
//     let question = { // should get data from db by id
//         title: 'demo',
//     };

//     res.render('account/singleTextQuestion', {
//         title: 'Edit Single Text Question',
//         question: question
//     })
// }

// module.exports.processAddSingleTextQuestion = (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/account');
// }

// module.exports.processEditSingleTextQuestion = (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/account');
// }







