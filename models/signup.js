const mongoose = require("mongoose");
const schema = mongoose.Schema;
const signUpSchema = new schema(
  {
    username: {
      type: String,
      required: true,
    },
    emailaddress: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  
  },

  { timestamps: true }
);

module.exports = mongoose.model("users", signUpSchema);
