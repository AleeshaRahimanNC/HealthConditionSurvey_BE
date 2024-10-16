const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    overview: { 
        type: String
     },
    // template_id: { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Template',
    //     required: true 
    // },
    questions: { 
        type: Array, 
        required: true 
    },
    link: { 
        type: String 
    },
    created_at: { 
        type: Date, 
        default: new Date() 
    },
    updated_at: { 
        type: Date, 
        default: new Date() 
    },
    status: { 
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',  
    },
});

module.exports = mongoose.model('Survey', surveySchema);
