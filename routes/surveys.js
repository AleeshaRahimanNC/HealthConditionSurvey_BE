const express = require('express');
const router = express.Router();
const {createSurvey} = require('../controllers/surveysController');

router.post('/create', createSurvey);

module.exports = router;

