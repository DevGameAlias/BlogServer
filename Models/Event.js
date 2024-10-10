const { mongoose } = require("mongoose");

const Event = new mongoose.Schema({
  Date: {
    type: Date,
    required: true,
  },
  Location: {
    type: Location,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", Event);
