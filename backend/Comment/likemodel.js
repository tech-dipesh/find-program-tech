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
