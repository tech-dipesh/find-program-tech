const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");
const signupListing = require("../Register/model.js");
const { CommentListing}  = require("./model.js");
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

module.exports.Comment=async (req, res)=>{
  try {
    const userName=signupListing;
    const id=req.params.id;
    const comments=await CommentListing.findOne({_id})
    const comment=req.body;
    let Cmt=await comments.save({comment});
    console.log(Cmt);
  } catch (error) {
    res.status(401).json("Error on the comment on individual listing", error)
  }
}