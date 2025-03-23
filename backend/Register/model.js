const mongoose = require("mongoose");
const { Schema } = require("../Tool/model");
const Signup = new mongoose.Schema({
  FullName: String,
  Email: String,
  userName: String,
  PassWord: String,
});
let SignupListing = mongoose.model("signupListing", Signup);
module.exports = SignupListing;
