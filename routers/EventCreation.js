const express = require("express")
const router = express.Router()
const Event = require("../Models/Event")
//get router for events
router.get("/", async (req, res) => {
    try {
        const events = await Event.find(); // Corrected: Use 'Event' instead of 'event'

        res.send(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).send(err.message);
    }
})

router.post('/create',async (req, res) => {
    
    try {
        // create new room from body
        const newEvent = new Event(req.body);
        // save new room to database
        await newEvent.save();
        // send message that new room is added
        res.send(`Event added`);
    } catch (err) {
        res.send(err)
    }
})

router.put('/update/:eventId',async (req, res) => {
    
    try {
        // create event id
        const eventID = req.params.eventId;
        const updatedData = req.body;
        const updatedEvent = await Event.findByIdAndUpdate(eventID, updatedData,{new:true})
        
        // send message that new room is added
        res.send(`Event updated`);
    } catch (err) {
        res.send(err)
    }
})

router.delete('/delete/:eventId',async (req, res) => {
    try {
        // create event id
        const eventID = req.params.eventId;
        const deletedData = req.body;
        const updatedEvent = await Event.findByIdAndDelete(eventID, deletedData,{new:true})
        
        // send message that new room is added
        res.send(`Event Deleted`);
    } catch (err) {
        res.send(err)
    }
})
module.exports = router