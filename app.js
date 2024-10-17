require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// import router
const StoryRoute = require("./routers/storyRoute");
const newsletterRoute = require("./routers/newsletterRoute"); 
const aboutRoute = require("./routers/aboutRoutes")


//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// use routes
app.use("/newsletter", newsletterRoute); 
app.use("/stories", StoryRoute);
app.use('/about', (req, res, next) => {
  console.log('About route hit');
  next();
}, aboutRoute);



app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });