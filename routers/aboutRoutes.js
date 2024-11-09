const express = require("express");
const router = express.Router();

// GET about page
router.get("/", (req, res) => {
  //  Here is where we would use fetching data (dynamic data) this code will need to be changed at a later date, if we are not hard coding
  const aboutInfo = {
    title: "About Page",
    description:
      "This is the Authors about page where you can learn more about the Author.",
  };
  res.status(200).json(aboutInfo); // this line sends JSON res. back to client (200)indicates request was successful.
});

module.exports = router;
