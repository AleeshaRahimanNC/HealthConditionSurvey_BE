const express = require('express');
const router = express.Router();
const {createSurvey,sendBulkEmail} = require('../controllers/surveysController');

router.post('/createSurvey', createSurvey);
router.post('/send-emails', sendBulkEmail)

module.exports = router;

