let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let surveyController = require('../controllers/surveycontroller');

router.get('/',surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', surveyController.processAddPage);

router.get('/edit/:id', surveyController.displayEditPage);

router.post('/edit/:id', surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', surveyController.performDelete);




/* Stanley updatd */
router.get('/mcQuestion', surveyController.displayAddMcQuestion);
router.post('/mcQuestion', surveyController.processAddMcQuestion);

router.get('/mcQuestion/:id', surveyController.displayEditMcQuestion);
router.post('/mcQuestion/:id', surveyController.processEditMcQuestion);

router.get('/singleTextQuestion', surveyController.displayAddSingleTextQuestion);
router.post('/singleTextQuestion', surveyController.processAddSingleTextQuestion);

router.get('/singleTextQuestion/:id', surveyController.displayEditSingleTextQuestion);
router.post('/singleTextQuestion/:id', surveyController.processEditSingleTextQuestion);

module.exports = router;

