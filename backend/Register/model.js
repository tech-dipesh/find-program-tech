const mongoose = require("mongoose");
const { Schema } = require("../Tool/model");
const Signup = new mongoose.Schema({
  FullName: String,
  Email: String,
  userName: String,
  PassWord: String,
});
let signupListing = mongoose.model("signupListing", Signup);
module.exports = signupListing;
