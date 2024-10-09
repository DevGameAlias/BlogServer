require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });
  