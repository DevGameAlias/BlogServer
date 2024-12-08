require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const Author = require("../Models/Author");
const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_KEY;
const SALT = Number(process.env.SALT);
const router = express.Router();

router.use(express.json()); // Ensure the server can parse JSON request bodies

router.post("/login", async (req, res) => {
    const { name, password } = req.body;

    console.log("Login attempt:", name, password);

    if (!name || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Check if the user exists
        const author = await Author.findOne({ name });

        if (!author) {
            console.log("User not found");
            return res.status(400).json({ message: "User not found" });
        }

        console.log("User found:", author);

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, author.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: author._id }, JWT_KEY, {
            expiresIn: 60 * 60 * 24,
        });

        // Set the cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({ message: `authenticated user ${author.name}`, author, token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Password request route
router.post("/request-reset", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Author.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        // Create reset token
        const token = jwt.sign({ id: user._id }, JWT_KEY, { expiresIn: '1h' });

        // TODO: Figure out what needs to go in the reset link
        const resetLink = `http://localhost:3000/reset-password/${token}`;
        console.log(`Password reset link: ${resetLink}`);
        res.status(200).json({ message: "Reset link sent", resetLink });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error requesting password reset" });
    }
});

router.post("/reset-password", async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Verify JWT
        const decoded = jwt.verify(token, JWT_KEY);
        const userId = decoded.id;

        const hashedPassword = await bcrypt.hash(newPassword, SALT);

        await Author.findByIdAndUpdate(userId, { password: hashedPassword });
        res.status(200).json({ message: "Password has been reset" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error resetting password" });
    }
});

module.exports = router;