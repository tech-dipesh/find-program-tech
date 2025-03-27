const mongoose=require("mongoose");
const {Schema}=mongoose;
const newTool = require("../Tool/model.js");

const likeDislikeSchema=new Schema({
  toolId: {
    type: Schema.Types.ObjectId,
    ref: 'newTool',
    required: true,
    // unique: true
  },
  Likes: {
    type: Number,
    default: 0
  },
  disLike: {
    type: Number,
    default: 0
  }
},
{ 
  // Remove unique constraint and allow multiple entries
  timestamps: true 
})  

// Ensure only one document per toolId
// likeDislikeSchema.index({ toolId: 1 }, { unique: true });
module.exports.Approval = mongoose.model("Approval", likeDislikeSchema);
// module.exports.Approval=mongoose.model("Approval", likeDislike);