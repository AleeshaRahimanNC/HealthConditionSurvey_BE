const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  overview: { 
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
  type: { 
    type: String,
},
  status: { 
    type: String,
    enum: ['active', 'inactive'],
    default: 'active', 
},
});

module.exports = mongoose.model("Template", templateSchema);
