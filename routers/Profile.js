require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const User = require("../models/User");
const Author = require("../Models/Author") // Import User model
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const SALT = Number(process.env.SALT);

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ username });
      console.log(user);
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Compare the entered password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user._id }, JWT_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      // this will set the cookie
      res.cookie("token", token, {
        maxAge: 60 * 60 * 24 * 1000,
        path: "/",
      });
  
      console.log(token);
      
  
      res
        .status(200)
        .json({ message: `authenticated user ${user.username}`, user, token });
      console.log(token);
    } catch (error) {
      console.log(error);
  
      res.status(500).json({ message: "Error logging in" });
    }
  });
  
  module.exports = router;