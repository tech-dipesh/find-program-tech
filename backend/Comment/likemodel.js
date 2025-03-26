const mongoose=require("mongoose");
const {Schema}=mongoose;

const likeDislike=new Schema({
  toolId: {
    type: Schema.Types.ObjectId,
    ref: 'modelListing',
    required: true,
    unique: true
  },
  Likes: {
    type: Number,
    default: 0
  },
  DisLike: {
    type: Number,
    default: 0
  }
})  
module.exports.Approval=mongoose.model("Approval", likeDislike);
// module.exports=Approval;