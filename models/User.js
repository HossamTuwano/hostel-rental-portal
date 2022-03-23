const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const userSchema = mongoose.model("user", User);
module.exports = userSchema;
