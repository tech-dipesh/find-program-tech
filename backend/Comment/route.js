const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");

module.exports.Like=async (req, res)=>{
  try {
    let id = req.params.id;
    let tool=await modelListing.findById(id);
    if(!tool){
      req.flash("error", "The Tool you are trying to access is not exist.")
      return res.redirect("/tools");
    }
    // let Start = await Approval.find({Like})
    // let Likes=Start+1;
    // let likeOperation=await new Likes.create({id});
    // let Like=await likeOperation.save();
    tool.Likes = (tool.Likes|| 0) + 1;
    await tool.save();
    res.redirect(`/tools/${tool._id}`, {Like});
  } catch (error) {
    res.status("402").send(`Error on the Like Individual Listing and the error is ${error}`)
  }
}


module.exports.DisLike=async (req, res)=>{
  try {
    
    let id = req.params.id;
    let Start = 0;
    let totalDisLike=Start+1;
    let DislikeOperation=await new totalDisLike.create({id});
    let DisLike=await DislikeOperation.save();
    res.redirect(`/tools/${id}`, {DisLike});
  } catch (error) {
    res.status("402").send(`Error on the DisLike Individual Listing and the error is ${error}`)
    req.flash("error", )
  }
}