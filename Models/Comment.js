const { mongoose } = require("../db");

const Comment = new mongoose.Schema({

    author:{
        type: String,
        maxLength:20,
    },
    body:{
        type: String,
        required: true,
        maxLength: 1000,
        timestamp: true,
    },
    createdAt:{
        type:Date,
        default: Date.now
        
    }

})

module.exports = mongoose.model ('comment', Comment)