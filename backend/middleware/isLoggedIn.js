const {signupListing}=require("../Register/model.js");
const commentController=require("../Comment/route.js");
module.exports.isLoggedIn= (req, res, next)=>{
  if (!req.session.userId) {
    // req.flash("error", "please try to login first");
    // return res.redirect("/login");
    return res.status(401).json({message: "Un autthorized please login first"});
  }
  next()
}
