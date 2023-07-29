const mongoose = require("mongoose");

const Connection = async () => {
  try {
    const isConnected = await mongoose.connect(
      "mongodb://localhost:27017/spaceX",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );

    if (isConnected) {
      console.log("connected to database");
    }
  } catch (error) {
    console.log("error connecting to the database:", error.message);
  }
};

module.exports = Connection;
