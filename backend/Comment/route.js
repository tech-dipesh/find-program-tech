const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");

// Like Controller

module.exports.Like = async (req, res) => {
  try {
    const id = req.params.id;

    // Find Approval document linked to the tool
    let approval = await Approval.findOne({ toolId: id });

    if (!approval) {
      approval = new Approval({ 
        toolId: id, // Use `id` here
        Likes: 1,
        DisLike: 0
      });
    } else {
      approval.Likes += 1;
    }

    await approval.save();
    res.redirect(`/tools/${id}`); // Use `id` here
  } catch (error) {
    req.flash("error", "Failed to process like");
    res.redirect(`/tools/${id}`);
  }
};

module.exports.DisLike=async (req, res)=>{
  try {
    let id = req.params.id;
    let tool=await Approval.findById(id);
    if(!tool){
      req.flash("error", "The Tool you are trying to access is not exist.")
      return res.redirect("/tools");
    }
    tool.DisLike = (tool.DisLike|| 0) - 1;
    await tool.save();
    res.redirect(`/tools/${tool._id}`);
  } catch (error) {
    res.status("402").send(`Error on the Like Individual Listing and the error is ${error}`)
  }
}