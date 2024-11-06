require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// import router
const StoryReview = require("./routers/StoryReview");
const profile = require("./routers/Profile");

// Import routers
const storyRoute = require("./routers/storyRoute");
const newsletterRoutes = require("./routers/newsletterRoute");
const blogRoutes = require("./routers/blogRoutes");
const commentRoutes = require("./routers/commentroutes");
const blogPageRoutes = require("./routers/blogpageRoutes");
const eventRoutes = require("./routers/EventCreation");

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// use routes
app.use("/profile", profile);
app.use("/blog", blogRoutes);
app.use("/blogpages", blogPageRoutes);
app.use("/comments", commentRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/stories", storyRoute);
app.use("/events", eventRoutes);
app.use("/storyReview", StoryReview);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Listening on PORT ${PORT}`);
});
