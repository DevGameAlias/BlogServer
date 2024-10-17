const express = require("express")
const router = express.Router()
const Song = require("../model/Song")

//get router for events
router.get("/", async (req, res) => {
    const event = await Song.find()
    res.send(event)
  })