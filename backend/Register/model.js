const mongoose = require("mongoose");
// const { Schema } = require("../Tool/model");
const passportLocalMongoose=require("passport-local-mongoose");
const {Schema}=mongoose;
const Signup = new mongoose.Schema({
  yourName:{
  type: String,
  required: [true, "Name must required"]
  },
  Email: {
    type: String,
    required: [true, "Please make sure that Email is required to register."],
    unique: [true, "Sorry this email is already exist."]
  },
  userName: {
    type: String,
    unique: true
  },
  PassWord: String,
});

// signupListing.plugin(passportLocalMongoose);
Signup.plugin(passportLocalMongoose, {
  usernameField: 'userName',
});

let signupListing = mongoose.model("signupListing", Signup);
module.exports = signupListing;