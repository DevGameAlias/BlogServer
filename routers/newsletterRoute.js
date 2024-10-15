const express = require('express');
const router = express.Router();
const { NewsletterSignup } = require('../Models/Newsletter');
const validator = require("validator");
const mongoose = require('mongoose')

// sign up for newsletter
router.post('/signup', async (req, res) => {
    const { email } = req.body;

    console.log(`Received email: ${email}`);
    console.log(`Email validation result: ${validator.isEmail(email)}`); // Log the validation result

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    try {
        const newSignup = new NewsletterSignup ({ email });
        await newSignup.save();
        res.status(201).json({ message: 'Successfully signed up for the newsletter.' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        if (error.code === 11000) { //11000 is a mongoDB error code for duplicate email(key) error
            return res.status(400).json({ error: 'Email already subscribed.' });
        }
        res.status(400).json({ error : 'Invalid email format.'});
    }
});

module.exports = router;
