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

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// use routes
app.use("/newsletter", newsletterRoutes); 
app.use("/stories", StoryRoute);


app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });
  