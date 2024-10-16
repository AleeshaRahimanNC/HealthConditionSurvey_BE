const Survey = require('../models/surveysModel');
const nodemailer = require('nodemailer');

// Create a new survey
const createSurvey = async (req, res) => {
    try {
        const { title, overview, questions} = req.body;

        // Create a new survey document
        const newSurvey = new Survey({
            title,
            overview,
            questions,
        });

        await newSurvey.save();

        res.status(201).json({ message: 'Survey created successfully', survey: newSurvey });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating survey' });
    }
};

// Function to send bulk emails using Nodemailer
const sendBulkEmail = async (emails, subject, message) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: emails.join(', '), // Send emails to multiple recipients
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        console.log('Emails sent successfully');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
};

module.exports = { createSurvey, sendBulkEmail };

