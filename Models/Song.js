const { mongoose } = require("mongoose")

const Song = new mongoose.Schema({
    Artist: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },


})

module.exports = mongoose.model("Song", Song)
