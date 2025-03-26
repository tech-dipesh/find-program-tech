const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupListing = require("../Register/model.js");
const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Comment: {
    type: String,
    required: true,
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: "signupListing",
  },
});
// const CommentListing=mongoose.model("CommentListing", CommentSchema)
module.exports.CommentListing = mongoose.model("CommentListing", CommentSchema);