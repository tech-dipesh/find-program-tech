const {signupListing}=require("../Register/model.js");
const commentController=require("../Comment/route.js");
module.exports.isLoggedIn= (req, res, next)=>{
  if (!req.session.userId) {
    req.flash("error", "please try to login first");
    return res.redirect("/login");
  }
  next()
}
