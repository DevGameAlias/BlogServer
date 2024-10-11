require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// Import routers
const StoryRoute = require('./routers/storyRoute');
const newsletterRoutes = require('./routers/newsletterRoute'); 
//const blogRoutes = require('./routers/blogRoutes');


// const blogRoutes = require('./routers/blogRoutes')
//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use("/blog", blogRoutes);

// use routes
//app.use("/newsletter", newsletterRoutes); 
//app.use("/stories", storyRoute);


app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });
  