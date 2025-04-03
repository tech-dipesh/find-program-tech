const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");
const signupListing = require("../Register/model.js");
const { CommentListing}  = require("./model.js");
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
      res.redirect(`/tools/${id}`);
    } catch (error) {
      console.error('Error on the like route:', error);
      res.redirect(`/tools/${id}`);
    }
  };
  
// module.exports.DisLike=async (req, res)=>{
//   try {
//     let id = req.params.id;
//     let tool=await Approval.findById(id);
//     if(!tool){
//       req.flash("error", "The Tool you are trying to access is not exist.")
//       return res.redirect("/tools");
//     }
//     tool.DisLike = (tool.DisLike|| 0) - 1;
//     await tool.save();
//     res.redirect(`/tools/${tool._id}`);
//   } catch (error) {
  //     res.status("402").send(`Error on the Like Individual Listing and the error is ${error}`)
  //   }
  // }


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
    console.log('Dislike saved:', approval);
    res.redirect(`/tools/${id}`);
  } catch (error) {
    console.error("Dislike error:", error);
    req.flash("error", "Failed to process dislike");
    res.redirect(`/tools/${id}`);
  }
};

module.exports.postComment=async (req, res)=>{
  try {
    let postId=req.params.id;

    // let listing=await signupListing.findById(req.params.id)
    // if(!listing){
    //   // throw new expressError("404", "listings is not found inside the comment modules")
    //   res.status(404).json({message: "Listing is not avaible that you are look for"})
    // }
    let newComment=await new CommentListing({
      // Comment: req.body.signupListing.Comment,
      // userName: req.body.signupListing.userName
      _id: new mongoose.Types.ObjectId(),
      Comment: req.body.Comment,
      userName: req.user._id ? req.user._id: null,
      date: new Date(),
      // track the individual comment id
      postId: postId
    })
    let savedComment=await newComment.save();
    res.status(200).json(savedComment)
  } catch (error) {
    console.error("Error on catch error", error)
    res.status(500).json({message: "Error on the comment on individual listing", error: error.message})
  }
}

module.exports.getComment=async(req, res)=>{
  try {
    let postId=req.params.id;
    const comments=await CommentListing.find().populate("userName", "userName")
    res.status(200).json(comments)
  } catch (error) {
    console.error("Error on get comments and the error is", error.message)
    res.status(500).json({message: "Error on the get Comments and the error is", error})
  }
}