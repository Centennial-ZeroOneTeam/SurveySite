/*
Created by Sabeen
Last Updated by Stanley
Last update date: Jul 27
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let accountController = require('../controllers/account');

// router.get('/',accountController.displaySurveyList);
/* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', accountController.displayAddPage);
/* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', accountController.processAddPage);
// router.get('/edit/:id', accountController.displayEditPage);
// router.post('/edit/:id', accountController.processEditPage);
/* GET to perform  Deletion - DELETE Operation */
// router.get('/delete/:id', accountController.performDelete);




/* Stanley updatd 20220727*/
router.get('/',accountController.displaySurveyListPage);
router.get('/addSurvey', accountController.displayAddSurveyFormPage);
router.post('/addSurvey', accountController.processAddSurveyFormPage);


router.get('/editSurvey/:id', accountController.displayEditSurveyListPage);
router.get('/deleteSurvey/:id', accountController.processDeleteSurvey);

router.get('/viewSurvey/:id', accountController.displayResultSurveyListPage);
router.get('/viewSurveyDetail/:id', accountController.displayResultSurveyDetailPage);

// router.get('/mcQuestion', accountController.displayAddMcQuestion);
// router.post('/mcQuestion', accountController.processAddMcQuestion);

// router.get('/mcQuestion/:id', accountController.displayEditMcQuestion);
// router.post('/mcQuestion/:id', accountController.processEditMcQuestion);

// router.get('/singleTextQuestion', accountController.displayAddSingleTextQuestion);
// router.post('/singleTextQuestion', accountController.processAddSingleTextQuestion);

// router.get('/singleTextQuestion/:id', accountController.displayEditSingleTextQuestion);
// router.post('/singleTextQuestion/:id', accountController.processEditSingleTextQuestion);
/* Stanley updatd end */

module.exports = router;

