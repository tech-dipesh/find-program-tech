const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");
const signupListing = require("../Register/model.js");
const { CommentListing, formData}  = require("./model.js");
const Post=require("../Tool/model.js")
const { default: mongoose } = require("mongoose");

module.exports.Like = async (req, res) => {
    try {
      const id = req.params.id;
      let approval = await Approval.findOne({ toolId: id });
      
      if (!approval) {
        approval = new Approval({
          toolId: id,
          Likes: 1,
          disLike: 0
        });
      } else {
        approval.Likes += 1;
      }
      
      await approval.save();
      res.status(200).json({ likes: approval.Likes, dislikes: approval.disLike });
    } catch (error) {
      console.error('Error on the like route:', error);
      res.status(500).json({ error: 'Failed to process like' });
    }
};

module.exports.disLike = async (req, res) => {
  try {
    const id = req.params.id;
    let approval = await Approval.findOne({ toolId: id });
   
    if (!approval) {
      approval = new Approval({
        toolId: id,
        Likes: 0,
        disLike: 1
      });
    } else {
      approval.disLike += 1;
    }
    
    await approval.save();
    res.status(200).json({ likes: approval.Likes, dislikes: approval.disLike });
  } catch (error) {
    console.error("Dislike error:", error);
    res.status(500).json({ error: 'Failed to process dislike' });
  }
};
module.exports.postComment=async (req, res)=>{
  try {
    let postId=req.params.id;
    // let postId=new objectId(req.params.id)
    console.log("Request Body", req.body);
    console.log("User INfo", req.user);
    // if(!req.user){
    //   return res.status(500).json({message: "User is not logged in"})
    // }
    
    let newComment=await new CommentListing({
      // Comment: req.body.signupListing.Comment,
      // userName: req.body.signupListing.userName
      // _id: new mongoose.Types.ObjectId(),
      Comment: req.body.Comment,
      userName: req.user._id || "guest",
      date: new Date(),
      // track the individual comment id
      postId: postId
    })
    let savedComment=await newComment.save();
    res.status(200).json(savedComment)
    // res.status(200).json({savedComment, currUser: req.user})
  } catch (error) {
    console.error("Error on catch error", error)
    res.status(500).json({message: "Error on the comment on individual listing", error: error.message})
  }
}

module.exports.getComment=async(req, res)=>{
  try {
    let postId=req.params.id
    // let postId=new objectId(req.params.id);
    const comments=await CommentListing.find({postId}).populate("userName", "userName")
    res.status(200).json(comments)
  } catch (error) {
    console.error("Error on get comments and the error is", error.message)
    res.status(500).json({message: "Error on the get Comments and the error is", error})
  }
}


module.exports.contactform=async (req, res)=>{
  try {
    let {fName, }=req.body;
    let 
  } catch (error) {
    console.error("Error on while submitting a new contact form");
    res.statu(500).json({message: "Error while submitting a contact form, please try again later."})
  }
}