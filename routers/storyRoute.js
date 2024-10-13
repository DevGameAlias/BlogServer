const express = require('express');
const ShortStory = require('../Models/story') // path to model/schema 
const router = express.Router();

//const { body, validationResult } = require('express-validator'); // For input validation

// TODO Validation middleware for creating and updating stories?


// get all short stories
router.get('/', async (req, res) => {
    try {
        const stories = await ShortStory.find(); // fetch all stories
        // res.status(200).json(stories);
        res.send("test")
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stories'});
    }
});

// create new story
router.post('/', async (req, res) => {
    const newStory = new ShortStory(req.body); // create a new story instance

    try {
        const savedStory = await newStory.save(); // save to the database
        res.status(201).json(savedStory);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create story' });
    }
});

// update story
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const updatedStory = await ShortStory.findByIdAndUpdate(id, req.body, { new: true }); // update and return the updated story
        if (!updatedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.status(200).json(updatedStory);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update story' });
    }
});

// delete story by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedStory = await ShortStory.findByIdAndDelete(id); // delete the story

        if (!deletedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.status(204).send(); // no content to send back
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete story' });
    }
});

module.exports = router;
