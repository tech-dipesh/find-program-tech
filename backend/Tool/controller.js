const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");

const expressError = require("../middleware/expressError.js");
// const data = require("../data/data.js");
const newSchema = require("../middleware/schema.js");
const modelListing = require("./model.js");
let {approvalListing} = require("../Comment/likemodel.js");
const { validationResult } = require("express-validator");
const signupListing = require("../Register/model.js");
module.exports.idEditGet = async (req, res) => {
  try {
    let id = req.params.id;
    let tools = await modelListing.findById(id);
    res.render("edit.ejs", { tools });
  } catch (error) {
    // res.send(`error on the edit id get route and the error is: ${error}`);
    res.status(500).json({message: `Error on the id edit get ${error.message}`})
  }
};

module.exports.idEditPut = async (req, res) => {
  try {
    let id = req.params.id;
    let { Name, companyName, Logo, releaseYear, useCase, webLink, Description, techStack } =
      req.body;
    let update = await modelListing.findByIdAndUpdate(
      id,
      { Name, companyName, Logo, releaseYear, useCase, webLink, Description, techStack },
      { new: true }
    );
    // res.redirect(`/tools/${id}`);
    res.status(200).json(update)
  } catch (error) {
    // res.send(`error on the edit post route and the error is, ${error}`);
    console.error("Error whle id edit put");
    res.status(500).json({message: `error while updating the listings ${error.message}`})
  }
};

module.exports.deleteListing = async (req, res) => {
  try {
    let postId = req.params.id;
    await modelListing.findByIdAndDelete(postId);
    // res.redirect(`/tools`);
    res.status(200).json();
    console.log(`${postId} is deleted`);
  } catch (error) {
    res.status(500).json(`Error on the deleteRoute ${error}`);
  }
};

// module.exports.individualListingGet = async (req, res) => {
//   try {
//     let id = req.params.id;
//     let tools = await modelListing.findById(id);

//     if (!tools) {
//       req.flash('error', 'Tool not found');
//       return res.redirect('/tools');
//     }
//     //  let approval = await Approval.findOne({ toolId: id });
//     // if (!approval) {
//     //   approval = new Approval({ toolId: id });
//     //   await approval.save();
//     // }
//     const approval = await Approval.findOne({ toolId: id }) || { likes: 0, dislikes: 0 };
//       // Like: approval.likes,
//       // DisLike: approval.dislikes,
//     res.render('showindividual.ejs', { tools, Like: approval.likes, Dislike: approval.DisLike});
//   } catch (error) {
//     console.error("Error fetching individual tool:", error);
//     req.flash('error', 'Failed to fetch tool details');
//     res.redirect('/tools');
//   }
// };

module.exports.individualListingGet = async (req, res) => {
  try {
    const id = req.params.id;
    // const tool = await modelListing.findById(id)
    const tool = await modelListing.findById(id).populate("userName");
    const approval = await approvalListing.findOne({ toolId: id });
    if (!isValidObjectId(id)) {
      // req.flash("error", "Invalid tool ID format");
      return res.status(500).json({error: error.message})
    }
    // res.render("showindividual.ejs", {
    //   tools,
    //   Like: approval ? approval.Likes : 0,
    //   disLike: approval ? approval.disLike : 0,
    // });
    // res.json({success: true, Like: approval ? approval.Likes:0, disLike:approval?approval.disLike: 0})
    res.json({ 
      success: true, 
      tool,
      likes: approval ? approval.Likes : 0,
      dislikes: approval ? approval.disLike : 0
    });
  } catch (error) {
    res.status(500).json({message: error})
    console.log(error);
  }
};

module.exports.showIdGet = async (req, res) => {
  try {
    let tools = await modelListing.find({});
    const user = await signupListing.findById(req.session.userId);
    // fullName=req.user.fullName;
    let fullName= req.user ? req.user.yourName : "guest";
    console.log(fullName);
    // res.render("index.ejs", {
    //   tools, fullName,
    //   success: req.flash("success"),
    //   error: req.flash("error"),
    // });
    res.json({success: true, tools})
  } catch (error) {
    // console.error("Error fetching tools:", error);
    res.status(500).json({ message: error });
    // res.send(`Error on the show id get route: ${error}`);
  }
};
module.exports.showIdPost = async (req, res) => {
  // console.log(`Requested data is: ${req.body}`);
  try {
    // console.log(req.user);
    
    // if(!req.user._id){
    //   req.flash("error",e "Please First login before creating a new listing")
    //   return res.redirect("/tools/new")
    // }
    // let userName=await signupListing.find({userName})
    // let Customer=await modelListing.create({Name: "New Nepali Pride tool", releaseYear: 2000, useCase: "For developing the humanity tool", UserName: userId})
    // let user=await signupListing.findOne({userName: req.body.userName});

    //this is for convertint the userName to id
    const user = await signupListing.findOne({ userName: req.user.userName });

    let { Name, companyName,Logo, releaseYear, useCase, webLink, Description, techStack} = req.body;

    const newTool = await modelListing.create({
      Name, 
      companyName,  
      Logo,
      releaseYear,
      useCase,
      webLink,
      // Logo,
      techStack,
      Description,
      // userName: req.user.userName,
      userName: user._id
    });
    // console.log(newTool);
    const tool=await newTool.save()
    // const tools=await modelListing.find({});
    // res.redirect("/tools", { currUser: req.user });
    res.status(201).json(tool)
  } catch (error) {
    // req.flash("error", "error on the show id post route, and the error is: ");
    console.log(error);
    // res.send(`error on the show id post route, and the error is: ${error}`);
    res.status(500).json({ error: error.message });
  }
};
