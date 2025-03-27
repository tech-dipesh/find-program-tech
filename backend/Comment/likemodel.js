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
  //only unique constraint i can add on the database.
  timestamps: true 
})  

// module.exports.Approval = mongoose.model("Approval", likeDislikeSchema);
module.exports = mongoose.model("Approval", likeDislikeSchema);