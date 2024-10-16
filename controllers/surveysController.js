const Survey = require('../models/surveysModel');

const createSurvey = async (req, res) => {
    try {
        const newSurvey = new Survey(req.body);
        await newSurvey.save();
        res.status(201).json(newSurvey);
    } catch (error) {
        res.status(500).json({ error: 'Error creating survey' });
    }
};

module.exports = {createSurvey};
