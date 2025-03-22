const {newSchema}=require("./schema.js");

const validateListing=(req, res, next)=>{
  const {error}=newSchema.validate(req.body);
  if(error){
    req.flash("error", error.details.map(err => err.message));
    return res.redirect("/tools");
  }
  next();
}
module.exports=validateListing;

