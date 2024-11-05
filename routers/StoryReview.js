require("dotenv").config();
const express = require("express");
<<<<<<< HEAD
const router = express.Router();
=======
const router = express.Router()
>>>>>>> d2b38042b244a8f9888c9fe5d7a5725befbbc55a
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