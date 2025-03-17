const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const SignupListing=require("../Register/model.js");

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
  Tags: String,
  UserName: {
    type: Schema.Types.ObjectId,
    ref: SignupListing
  }
})
let newTool=mongoose.model("newTool", Toolvalidate)
module.exports=newTool;