const express=require("express");
const router=express.Router();
const signupListing=require("./model.js");
const expressError=require("../middleware/expressError.js");
const { default: mongoose } = require("mongoose");

module.exports.signupGet = async (req, res) => {
  try {
    let newUser=await signupListing.find({})
    res.render("Register/signup.ejs", {newUser});
  } catch (error) {
    res.send(`error on the signup get route and the error is: ${error}`);
  }
};

module.exports.signupPost = async (req, res) => {
  try {
    // let {signupId}=new mongoose.Types.ObjectId();
    let {yourName, Email, PassWord, userName}=req.body;
    let newUser=await signupListing.create({yourName, Email, PassWord, userName});
    console.log(newUser);
    res.redirect("/tools");
  } catch (error) {
    res.send(`error on the signup post route and the error is: ${error}`);
  }
};

module.exports.loginGet = async (req, res) => {
  try {
    let dataUser=await signupListing.find({})
    res.render("Register/login.ejs", {dataUser})
  } catch (error) {
    res.send(`error on the login get route and the error is: ${error}`);
  }
};

module.exports.loginPost = async (req, res) => {
  try {
    let {userName, PassWord}=req.body;
    let dataUser=await signupListing.findOne({userName})
    
    if(!dataUser){
      req.flash("error", "Username doesn't exist")
        return res.redirect("/login")
    }
    if(PassWord!==dataUser.PassWord){
      req.flash("error", "Password doesn't match");
      return res.redirect("/login");
    }
    req.session.userId = dataUser._id; 
    req.flash("success", "congratulation you put the correct address");
    res.redirect("/tools")
    // res.send("this is the post login post method.");
  } catch (error) {
    res.send(`error on the login post route and the error is: ${error}`);
  }
};

module.exports.logoutGet = async (req, res) => {
  try {
    res.send("this is logout get");
  } catch (error) {
    res.send(`error on the logout get route and the error is: ${error}`);
  }
};

module.exports.logoutPost = async (req, res) => {
  try {
    res.send("this is logout post");
  } catch (error) {
    res.send(`error on the logout post route and the error is: ${error}`);
  }
};