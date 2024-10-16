const Template = require('../models/templatesModel');

// Fetch default templates (e.g., Weather Survey, Feedback Survey)
const getDefaultTemplates = async (req, res) => {
    try {
        // Fetch predefined templates
        const templates = await Template.find().limit(4); // Adjust the limit as needed
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching templates' });
    }
};

// Create a new template
const createTemplate = async (req, res) => {
    try {
        const newTemplate = new Template(req.body);
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(500).json({ error: 'Error creating template' });
    }
};

module.exports = { getDefaultTemplates, createTemplate };
