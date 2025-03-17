const mongoose = require("mongoose");
const { Schema } = require("../Tool/model");
const Signup = new mongoose.Schema({
  FullName: String,
  userName: String,
  Password: String,
  Email: String,
});
let SignupListing = mongoose.model("signupListing", Signup);
module.exports = SignupListing;
