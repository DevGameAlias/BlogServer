require("dotenv").config();
const express = require("express");
const sReview = require("../Models/StoryReview")
const router = express.Router();

router.post("/", async(req,res) => {
    const{ author, rating, body} =req.body;

    try{

    } catch (err){
        res.status(400).json({error: err.message});
    }
})




module.exports = router