const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const signupListing=require("../Register/model.js");
const { CommentListing } = require("../Comment/model.js");

const Toolvalidate=new Schema({
  Name: String,
  // userName: "signupListing",
  userName:{
    type: Schema.Types.ObjectId,
    ref: "signupListing"
  },
  Logo:{
    type: String,
    set: (v) =>
      v === ""
        ? "https://i.sstatic.net/pwbPp7fg.jpg"
        : v,
  },
  companyName: {
      type: String,
      minLength: 3,
  },
  releaseYear:{
    type: Number,
    minLength: [1800, "The minimum year should be the 1800."],
    maxLength: [2025, "you can write more than 2025"]
  },
  useCase:{
    type: String,
    minLength:[5, "Minimum should be more than 5 characters."],
    maxLength:[50, "Maximum should be less than 5 characters."],
  },
  webLink: {
    type: String,
    required: true,
    //match is for the pattern which should match.
    match: [/^https:\/\/.+\..+/, 'Website must start with https:// and contain a dot'],
    maxLength: [35, "product url can't be more than 35 characters"],
    minLength: [3, "please write the legiit name"]
  },
  techStack: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    // default: "Full Stack"
  },
  Date:{
    type: String,
    default: Date()
  },
  Comment:{
    type: Schema.Types.ObjectId,
    ref:"CommentListing"
  }
  // userName: {
  //   type: String,
  //   required: true
  // },
  // userName: {
  //   type: Schema.Types.ObjectId,
  //   ref: "signupListing" 
  // }
  
})
let newTool=mongoose.model("newTool", Toolvalidate)
module.exports=newTool;