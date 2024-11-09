const express = require("express");
const router = express.Router();
const Event = require("../Models/Event");
const tokenValidation = require("../middlewares/tokenValidation.js");
const {NewsletterSignup} = require('../Models/Newsletter.js')

//get router for events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // Corrected: Use 'Event' instead of 'event'

    res.send(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).send(err.message);
  }
});

router.post("/create", tokenValidation, async (req, res) => {
  try {
    // create new room from body
    const newEvent = new Event(req.body);
    // save new room to database
    await newEvent.save();
    // send message that new room is added
    res.send(`Event added`);
  } catch (err) {
    res.send(err);
  }
});

router.post('/:eventId/signup', async (req,res) => {
  try{
    const {eventId} = req.params;
    const {email} =req.body;
    console.log("Signing up for event:", eventId, "with email:", email);
    const signup = new NewsletterSignup({email, signupType: 'event', eventId});
    await signup.save()
    console.log("Signup successful:", signup);
    res.status(201).json(signup);
  }catch(error){
    console.error('Error signing up for event:' , error)// checking error
    res.status(500).json({error: error.message})

  }
})
//route for user to sign up
router.put("/update/:eventId", tokenValidation, async (req, res) => {
  try {
    // create event id
    const eventID = req.params.eventId;
    const updatedData = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventID, updatedData, {
      new: true,
    });

    // send message that new room is added
    res.send(`Event updated`);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/delete/:eventId", tokenValidation, async (req, res) => {
  try {
    // create event id
    const eventID = req.params.eventId;
    const deletedData = req.body;
    const updatedEvent = await Event.findByIdAndDelete(eventID, deletedData, {
      new: true,
    });

    // send message that new room is added
    res.send(`Event Deleted`);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
