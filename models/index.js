const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect("mongodb+srv://harshit:harshit@cluster0.ymuop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.user = require("./user.js")
