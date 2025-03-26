const mongoose=require("mongoose");
const {Schema}=mongoose.Schema;

const likeDislike=new Schema({
  Likes: {
    Type: String,
    default: 0
  },
  DisLike: {
    Type: String,
    default: 0
  }
})  
module.exports.Approval=mongoose.model("Approval", likeDislike);
// module.exports=Approval;