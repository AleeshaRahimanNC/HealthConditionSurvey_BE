var express = require('express');
var router = express.Router();
const {getDefaultTemplates, createTemplate}= require('../controllers/templatesController');

// Route to get default templates
router.get('/', getDefaultTemplates);

// Route to create a new template
router.post('/', createTemplate);

module.exports = router;


