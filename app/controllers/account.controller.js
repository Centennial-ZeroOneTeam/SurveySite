let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let SurveyInfo = require('../models/survey');

function displayName(req) {
    return req.user ? req.user.displayName : ''
}




// My Survey
module.exports.displaySurveyListPage = (req, res, next) => {

    SurveyInfo.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('account/listSurvey', {
                title: 'Survey List',
                surveyList: surveyList,
                displayName: displayName(req)
            });
        }
    });

}
module.exports.displayAddSurveyPage = (req, res, next) => {
    res.render('account/addSurvey', {
        title: 'Create Survey',
        displayName: displayName(req)
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
    let id = req.params.id;
    SurveyInfo.findById(id, (err, surveyToEdit) => {
        console.log(surveyToEdit);
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('account/editSurvey', {
                title: 'Edit Survey',
                surveyInfo: surveyToEdit,
                displayName: displayName(req)
            });
        }
    });    
}
module.exports.processEditSurvey = (req, res, next) => {
    console.log(req.body);

    res.redirect('/account');
}
module.exports.processDeleteSurvey = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/account');
        }
    });
}

// View result
module.exports.displayResultSurveyListPage = (req, res, next) => {
    let resultList = ['a', 'b', 'c', 'd'];

    res.render('account/resultList', {
        title: 'Submited Surveys',
        resultList: resultList,
        displayName: displayName(req)
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
        surveyInfo: survey,
        displayName: displayName(req)
    });
}


/* end. Stanley */

// module.exports.displayAddPage = (req, res, next) => {
//     res.render('account/add', {title: 'Add Question', displayName: displayName(req)})
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
//             res.render('account/edit', {title: 'Edit Question', survey: surveyToEdit, displayName: displayName(req)})
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
//         question: question,
//         displayName: displayName(req)
//     })
// }

// module.exports.displayEditMcQuestion = (req, res, next) => {
//     let id = req.params.id;

//     // SurveyInfo.findById(id, (err, surveyToEdit) => {
//     let question = { // should get data from db by id
//         title: 'demo',
//         answer: ['ans1', 'ans2'],        
//     };

//     res.render('survey/mcQuestion', {
//         title: 'Edit MC Question',
//         question: question,
//        displayName: displayName(req)
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
//         question: question,
//        displayName: displayName(req)
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
//         question: question,
//        displayName: displayName(req)
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







