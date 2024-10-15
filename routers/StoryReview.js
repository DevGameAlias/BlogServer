require("dotenv").config();
const express = require("express");
const router = express.Router()
const sReview = require("../Models/StoryReview")

router.post("/", async(req,res) => {
    console.log(req.body)
    try {
        // create new room from body
        const newReview = new sReview(req.body);
        // save new room to database
        await newReview.save();
        // send message that new room is added
        res.send(`Review Posted`);
    } catch (err) {
        res.send(err)
    }
})
 
module.exports = router