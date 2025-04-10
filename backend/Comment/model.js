const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupListing = require("../Register/model.js");
const newTool=require("../Register/model.js");
const { required } = require("joi");
const CommentSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  Comment: {
    type: String,
    required: true,
    minLength: [5, "It should have at least 5 Character Length."]
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: "signupListing",
    // required: false
  },
  date:{
    type: Date,
    default: Date.now
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "newTool"
  }
});
// const CommentListing=mongoose.model("CommentListing", CommentSchema)
module.exports.CommentListing = mongoose.model("CommentListing", CommentSchema);