const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/upcloud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.user = require("./user.js")