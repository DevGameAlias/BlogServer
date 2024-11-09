require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Author = require("../Models/Author");

const JWT_KEY = process.env.JWT_KEY;
const SALT = Number(process.env.SALT);
//creating owner with function to have credentials to test out routes
async function createOwner() {
  //owner credentials
  const username = "codeTeam";
  const email = "codeteamblog@outlook.com"; // will create a new email to test password reset
  const password = "1q2e@3r8t!";

  try {
    //connecting to MongoDB
    await mongoose.connect(process.env.DB_URL, {
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
