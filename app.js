require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// import router
const StoryRoute = require("./routers/storyRoute");

const newsletterRoutes = require("./routers/newsletterRoute"); 
const storyReview = require('./routers/StoryReview')
const eventRoutes = require('./routers/EventCreation')
const homePage = require('./routers/homePage')


//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use("/events",eventRoutes)
app.use('/stories', storyReview)
app.use('/Home',homePage) 

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