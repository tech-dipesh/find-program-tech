const mongoose = require("mongoose");
// const { Schema } = require("../Tool/model");
const {Schema}=mongoose;
const Signup = new mongoose.Schema({
  yourName: String,
  Email: String,
  userName: String,
  PassWord: String,
});
let signupListing = mongoose.model("signupListing", Signup);
module.exports = signupListing;