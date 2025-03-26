const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("../Tool/model.js");

module.exports.LikeListing= async (req, res) => {
  try {
    let id = req.params.id;
    let Like = 0;
    let DisLike = 0; 
    res.render("showindividual", { tools, Like, DisLike, id });
  } catch (error) {
    console.error("Error in Like Route:", error);
    req.flash("error", "Error on the Like Route");
    res.redirect(`/tools/${id}`);
  }
};