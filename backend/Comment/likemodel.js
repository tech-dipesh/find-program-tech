const mongoose=require("mongoose");
const {Schema}=mongoose;
const newTool = require("../Tool/model.js");

const likeDislikeSchema=new Schema({
  toolId: {
    type: Schema.Types.ObjectId,
    ref: 'newTool',
    required: true,
    unique: true
  },
  Likes: {
    type: Number,
    // type: Schema.type.ObjectId,
    default: 0,
      ref: 'signupListing'
  },
  disLike: {
    type: Number,
    // type: Schema.type.ObjectId,
    default: 0,
      ref: 'signupListing'
  }
},
{ 
  //only unique constraint i can add on the database.
  timestamps: true 
})  
module.exports.approvalListing = mongoose.model("approvalListing", likeDislikeSchema);

const formData=new Schema({
  fName: {
    type: String,
    minLength: [5, "Please write the full Name"]
  },
  Email: {
    type: String,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please put the correct Email Address.'],
      required: false,
      unique: [true, "Please Make sure that your Email is not exist."]
  },
  Message: {
    type: String,
    minLength: [10, "It should have valid message"]
  }
})

module.exports.contactForm=mongoose.model("contactForm", formData)