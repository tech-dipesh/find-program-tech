const express=require("express");
const router=express.Router();
const signupListing=require("./model.js");
const expressError=require("../middleware/expressError.js");

module.exports.signupGet = async (req, res) => {
  try {
    
    res.send("this is the signup get method.");
  } catch (error) {
    res.send(`error on the signup get route and the error is: ${error}`);
  }
};

module.exports.signupPost = async (req, res) => {
  try {
    res.send("this is the signup post method.");
  } catch (error) {
    res.send(`error on the signup post route and the error is: ${error}`);
  }
};

module.exports.loginGet = async (req, res) => {
  try {
    res.send("this is the get login get method.");
  } catch (error) {
    res.send(`error on the login get route and the error is: ${error}`);
  }
};

module.exports.loginPost = async (req, res) => {
  try {
    res.send("this is the post login post method.");
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