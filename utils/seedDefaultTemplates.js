const Template = require('../models/templatesModel');

const seedDefaultTemplates = async () => {
    const defaultTemplates = [
        { title: 'Weather Survey', overview: 'Collect weather data', type: 'Weather' },
        { title: 'Feedback Survey', overview: 'Gather user feedback', type: 'Feedback' },
        { title: 'Health Survey', overview: 'Assess health status', type: 'Health' },
        { title: 'Custom Survey', overview: 'Create your own survey', type: 'Custom' }
    ];

    try {
        const existingTemplates = await Template.find();
        if (existingTemplates.length === 0) {
            await Template.insertMany(defaultTemplates);
            console.log('Default templates seeded successfully');
        } else {
            console.log('Templates already exist in the database');
        }
    } catch (error) {
        console.error('Error seeding default templates:', error);
    }
};

module.exports = seedDefaultTemplates;
