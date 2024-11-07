// Newsletter Signup Schema

const mongoose = require("mongoose");

const newsletterSignupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  signupType: {
    type: String,
    enum: ["newsletter", "event"],
    required: true,
    default: "newsletter",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: function () {
      return this.signupType === "event";
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsletterSignup = mongoose.model(
  "NewsletterSignup",
  newsletterSignupSchema
);

module.exports = { NewsletterSignup };
