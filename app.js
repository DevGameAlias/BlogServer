require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// Import routers
const storyRoute = require('./routers/storyRoute');
const newsletterRoutes = require('./routers/newsletterRoute'); 
const blogRoutes = require('./routers/blogroutes');
const commentRoutes = require('./routers/commentroutes');
const blogPageRoutes = require('./routers/blogpageRoutes');

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// use routes
app.use("/blog", blogRoutes);
app.use('/blogpages', blogPageRoutes);
app.use("/comments", commentRoutes);
app.use("/newsletter", newsletterRoutes); 
app.use("/stories", storyRoute);

app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });
