const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SignupListing = require("../Register/model.js");
const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Comment: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    ref: SignupListing,
  },
});
// const CommentListing=mongoose.model("CommentListing", CommentSchema)
module.exports.CommentListing = mongoose.model("CommentListing", CommentSchema);