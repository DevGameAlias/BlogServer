const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Log the current working directory
console.log("Current working directory:", process.cwd());

// Adjust the path to the Author model if necessary
const authorPath = path.join(__dirname, "../Models/Author");
const Author = require(authorPath);



const JWT_KEY = process.env.JWT_KEY;
const SALT = Number(process.env.SALT);
const DB_URL = process.env.DB_URL;
const USRNM = process.env.USRNM;
const PSSWRD = process.env.PSSWRD;
const EML = process.env.EML;

// Log environment variables to debug


//creating owner with function to have credentials to test out routes
async function createOwner() {
    //owner credentials
    const username = USRNM;
    const email = EML;
    const password = PSSWRD;

    try {
        //connecting to MongoDB
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const hashedPassword = await bcrypt.hash(password, SALT);

        //creating user
        const author = new Author({
            name: username,
            email,
            password: hashedPassword,
        });

        await author.save();
        console.log("author created");
    } catch (error) {
        console.error("error creating account", error);
    } finally {
        await mongoose.connection.close();
    }
}

createOwner();