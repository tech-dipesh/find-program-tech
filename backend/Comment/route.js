const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");
const signupListing = require("../Register/model.js");
const { CommentListing}  = require("./model.js");
const Post=require("../Tool/model.js")
const { default: mongoose } = require("mongoose");
module.exports.Like = async (req, res) => {
    try {
      const id = req.params.id;
      // let approval = await Approval.findOne({ toolId: id });
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
      const post=await Approval.findById({toolId: id})
      post.Likes+=1
      await post.save();
      // res.redirect(`/tools/${id}`);
      res.json({likes: post.Likes})
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
    let approval = await Approval.findById({ toolId: id });
    
    // if (!approval) {
    //   approval = new Approval({ 
    //     toolId: id,
    //     Likes: 0,
    //     disLike: 1
    //   });
    // } else {
    //   approval.disLike += 1;
    // }

    await approval.save();
    res.json(500).json({disLike: approval.dislike})
    // res.redirect(`/tools/${id}`);
  } catch (error) {
    console.error("Dislike error:", error);
    req.flash("error", "Failed to process dislike");
    res.redirect(`/tools/${id}`);
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