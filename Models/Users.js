const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the first name"],
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
  budget: {
    type: String,
  },
  home:{
    type:String
  }
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
