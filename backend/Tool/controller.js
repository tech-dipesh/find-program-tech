const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const expressError=require("../middleware/expressError.js");
const data=require("../data/data.js");
const newSchema=require("../middleware/schema.js");
const modelListing=require("./model.js");
const newTool = require("./model.js");

const { validationResult}=require("express-validator");
const signupListing = require("../Register/model.js");
module.exports.idEditGet=async (req, res) => {
  try {
    let id=req.params.id
    let tools=await modelListing.findById(id)
    res.render("edit.ejs", {tools})
  } catch (error) {
    res.send(`error on the edit id get route and the error is: ${error}`)
  }
}

module.exports.idEditPut=async (req, res) => {
  try {
    
    let id=req.params.id;
    let {Name, Logo, releaseYear, useCase, techStack, Description, userName}=req.body;
    let update=await modelListing.findByIdAndUpdate(id, {Name, Logo, releaseYear, useCase, techStack, Description, userName},{new: true})
    res.redirect(`/tools/${id}`)
  } 
  catch (error) {
    res.send(`error on the edit post route and the error is, ${error}`)
  }
}

module.exports.deleteListing=async (req, res)=>{
  try {
    let postId=req.params.id;
    await modelListing.findByIdAndDelete(postId);
    res.redirect(`/tools`)
    console.log(`${postId} is deleted`);
  } catch (error) {
    res.status(402).send(`Error on the deleteRoute ${error}`)
  }
}


module.exports.individualListingGet=async (req, res)=>{
  try {
    let id=req.params.id;
    let tools=await modelListing.findById(id).populate("userName")
    res.render(`showindividual.ejs`, {tools});
  } catch (error) {
    res.status(402).send(`error on the individualListing ${error}`)
  }
}

module.exports.showIdGet=async(req, res)=>{
    // if(error){
    // throw new expressError (500, "express error occured");
    // }
  try { 
    let tools=await modelListing.find({}).populate("userName");
    res.render("index.ejs", {tools});
  } catch (error) {
    res.send(`error on the show id get route and the error is: ${error}`)
  }
}


// module.exports.showIdPost=async(req, res)=>{
//   try {
//     if(!req.user._id){
//       req.flash("error", "Please First login before creating a new listing")
//       return res.redirect("/tools/new")
//     }
//     // let Customer=await modelListing.create({Name: "New Nepali Pride tool", releaseYear: 2000, useCase: "For developing the humanity tool", UserName: userId})
//     // let user=await signupListing.findOne({userName: req.body.userName});
//     let {Name, Logo, releaseYear, useCase, techStack}=req.body;
//     const newTool=await modelListing.create({
//       Name, releaseYear, useCase, Logo, techStack, userName: req.user._id
//     });
//     console.log(newTool);
//     // const tools=await modelListing.find({});
//     res.redirect("/tools");
//   } catch (error) {
//     req.flash("error", "error on the show id post route, and the error is: ");
//     res.send(`error on the show id post route, and the error is: ${error}`)
//   }
// }


module.exports.showIdPost = async (req, res) => {
  try {
    const { Name, Logo, releaseYear, useCase, techStack, Description } = req.body;
    const newTool = await modelListing.create({ 
      Name, 
      Logo, 
      releaseYear, 
      useCase, 
      techStack, 
      Description,
      userName: req.user._id // Ensure user is logged in
    });
    console.log("New Tool Created:", newTool);
    res.redirect("/tools");
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/tools/new");
  }
};