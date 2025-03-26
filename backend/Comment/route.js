const express = require("express");
const router = express.Router();
const Approval = require("./likemodel.js");
const modelListing = require("./modelListing"); // Assuming you have a modelListing file for fetching the tool

// Like route
router.post("/:id/like", async (req, res) => {
  try {
    let id = req.params.id;
    let Like = 0;
    let DisLike = 0; // Initialized DisLike to 0
    
    // Fetch the tool details by its ID
    let tools = await modelListing.findById(id);
    if (!tools) {
      req.flash("error", "Tool not found");
      return res.redirect("/tools");
    }

    // Pass the tool data along with Like and DisLike
    res.render("tools/showindividual", { tools, Like, DisLike, id });
  } catch (error) {
    console.error("Error in Like Route:", error);
    req.flash("error", "Error on the Like Route");
    res.redirect(`/tools/${id}`);
  }
});
