const express=require("express");
const router=express.Router();
const signupListing=require("./model.js");
const expressError=require("../middleware/expressError.js");
const { default: mongoose } = require("mongoose");

module.exports.signupGet = async (req, res) => {
  try {
    let newUser=await signupListing.find({})
    // res.render("Register/signup.ejs", {newUser});
        res.json(newUser)
  } catch (error) {
    res.status(201).json(`Error on the signup get json: ${error}`)
  }
};

module.exports.signupPost = async (req, res) => {
  try {
    // let {signupId}=new mongoose.Types.ObjectId();
    let {yourName, Email, PassWord, userName}=req.body;
    // const registeredUser = await signupListing.register(yourName, Email, PassWord, userName);
    let newUser=await new signupListing({yourName, Email, PassWord, userName});
    const SaltedValule = signupListing.register(newUser, userName);
    req.session.userId = newUser._id;
    res.redirect("/tools");
  } catch (error) {
    res.send(`error on the signup post route and the error is: ${error}`);
  }
};



module.exports.loginGet = async (req, res) => {
  try {
    let dataUser=await signupListing.find({})
    // res.render("Register/login.ejs", {dataUser})
    res.json(dataUser);
  } catch (error) {
    // res.send(`error on the login get route and the error is: ${error}`);
    res.status(201).json(`Error on the login get json: ${error}`)
  }
};

module.exports.loginPost = async (req, res) => {
  try {
    let {userName, PassWord}=req.body;
    let dataUser=await signupListing.findOne({userName})
    
    if(!dataUser){
      // req.flash("error", "Username doesn't exist")
        return res.status(401).json({ message: 'Invalid username or password' })
    }
    if(PassWord!==dataUser.PassWord){
      // req.flash("error", "Password doesn't match");
      // return res.json("/login");
      return res.status(401).json({ message: 'Invalid username or password' })
    }
    req.session.userId = dataUser._id; 
    // req.flash("success", "congratulation you put the correct address");

    // res.redirect("/tools")
    res.json({ message: 'Login successful' });
  } catch (error) {
    // res.send(`error on the login post route and the error is: ${error}`);
    res.status(402).json({message: "sever error on login post"});
  }
};

module.exports.logoutGet = async (req, res) => {
  try {
    req.logout((err)=>{
      if(err){
        next(err);
      }
      req.flash("success", "you have succesfully logged out!")
      res.redirect("index.ejs", )
    })
  } catch (error) {
    res.send(`error on the logout get route and the error is: ${error}`);
  }
};
