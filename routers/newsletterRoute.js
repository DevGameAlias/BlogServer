const express = require('express');
const router = express.Router();
const Newsletter = require('../Models/Newsletter');

// sign up for newsletter
router.post('/signup', async (req, res) => {
    const { email } = req.body;

    try {
        const newSignup = new Newsletter ({ email });
        await newSignup.save();
        res.status(201).json({ message: 'Successfully signed up for the newsletter.' });
    } catch (error) {
        if (error.code === 11000) { //11000 is a mongoDB error code for duplicate email(key) error
            return res.status(400).json({ error: 'Email already subscribed.' });
        }
        res.status(400).json({ error : 'Invalid email format.'});
    }
});

module.exports = router;
