const mongoose = require("mongoose");
// const { Schema } = require("../Tool/model");
const passportLocalMongoose=require("passport-local-mongoose");
const {Schema}=mongoose;
const Signup = new mongoose.Schema({
  yourName: String,
  Email: String,
  userName: {
    type: String,
    unique: true
  },
  PassWord: String,
});

signupListing.plugin(passportLocalMongoose);
let signupListing = mongoose.model("signupListing", Signup);
module.exports = signupListing;