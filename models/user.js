const mongoose = require("mongoose");
require("mongoose-type-url");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    runValidators: true,
  },
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    runValidators: true,
  },
  contact: {
    type: Number,
    required: true,
    runValidators: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    runValidators: true,
  },
  address: {
    type: String,
    required: true,
    runValidators: true,
  },
});

module.exports = mongoose.model("user", userSchema);
