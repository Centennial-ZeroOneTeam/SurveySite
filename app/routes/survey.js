/*
Created by Stanley
Last Updated by Stanley
Last update date: Jul 27
*/
var express = require('express');
var router = express.Router();

let surveyController = require('../controllers/survey')

router.get('/', surveyController.displaySurveyListPage);
router.get('/:id', surveyController.displaySurveyFormPage);
router.post('/:id', surveyController.processSubmitSurvey);

module.exports = router;
