const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    survey_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Survey', 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    response: { 
        type: Array, 
        required: true 
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

module.exports = mongoose.model('Response', responseSchema);
