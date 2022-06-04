const mongoose = require("mongoose");

const Connection = async () => {
  try {
    const isConnected = await mongoose.connect(
      "mongodb://127.0.0.1:27017/spaceX",
      { useNewUrlParser: true }
    );

    if (isConnected) {
      console.log("connected to database");
    }
  } catch (error) {
    console.log("error connecting to the database:", error.message);
  }
};

module.exports = Connection;
