const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected successfully to: ${process.env.DB_URL}`);
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};
module.exports = { dbConnect, mongoose };
