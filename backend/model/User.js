const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
  id: String,
});

const User = mongoose.model("User", UserScheme);

module.exports = User;
