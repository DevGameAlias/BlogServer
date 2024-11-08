const { mongoose } = require("mongoose");

const Event = new mongoose.Schema({
  defaultate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", Event);
