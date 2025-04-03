const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupListing = require("../Register/model.js");
const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Comment: {
    type: String,
    required: true,
    min: [5, "It should have at least 5 Character Length."]
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: "signupListing",
  },
  date:{
    type: Date,
    default: Date.now
  }
});
// const CommentListing=mongoose.model("CommentListing", CommentSchema)
module.exports.CommentListing = mongoose.model("CommentListing", CommentSchema);