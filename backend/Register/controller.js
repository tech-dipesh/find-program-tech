const express=require("express");
const router=express.Router();
const signupListing=require("./model.js");
const expressError=require("../middleware/expressError.js");
const { default: mongoose } = require("mongoose");

module.exports.userActivity=async(req, res)=>{
  try {
    // console.log("session", req.session);
    // console.log("User logged in", req.user);
    res.status(200).json({currUser: req.user})
  } catch (error) {
    res.status(500).json("Error ocured on the userActivity router and the error is", error.message)
  }
}

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
        return res.status(401).json({ message: 'Invalid username or password' })
    }
    if(PassWord!==dataUser.PassWord){
      return res.status(401).json({ message: 'Invalid username or password' })
    }
    req.session.userId = dataUser._id; 
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(402).json({message: "sever error on login post", error});
  }
};

module.exports.logoutGet = async (req, res) => {
  try {
    req.logout((err)=>{
      if(err){
        // next(err);
       return res.status(500).json({message: "Error while logout while calling the req.logut", err})
      }
      req.session.destroy((err)=>{
        if(err){
         return res.status(500).json({message: "Error while destroying/removeing user session with passpot"})
        }
      return  res.status(200).json({message: "Succesfully logged out"})
      })
      // res.redirect("index.ejs", )
    })
  } catch (error) {
    // res.send(`error on the logout get route and the error is: ${error}`);
    console.error("Error occured on the logout", error)
    res.status(500).json("Error on the logout route", error.message)
  }
};
