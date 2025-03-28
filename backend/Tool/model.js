const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const signupListing=require("../Register/model.js");
const { required } = require("joi");

const Toolvalidate=new Schema({
  Name: String,
  Logo:{
    type: String,
    set: (v) =>
      v === ""
        ? "https://i.sstatic.net/pwbPp7fg.jpg"
        : v,
  },
  releaseYear:{
    type: Number,
    min: [1800, "The minimum year should be the 1800."],
    max: [2025, "you can write more than 2025"]
  },
  useCase:{
    type: String,
    min:[5, "Minimum should be more than 5 characters."],
    max:[50, "Maximum should be less than 5 characters."],
  },
  techStack: String,
  Description: {
    type: String,
    // default: "Full Stack"
  },
  Date:{
    type: String,
    default: Date()
  },
  userName: {
    type: String,
    required: true
  },
  // userName: {
  //   type: Schema.Types.ObjectId,
  //   ref: "signupListing" 
  // }
  
})
let newTool=mongoose.model("newTool", Toolvalidate)
module.exports=newTool;