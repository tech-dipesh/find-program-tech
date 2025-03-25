const {signupListing}=require("../Register/model.js");
module.exports.isLoggedIn= async(req, res, next)=>{
  if (!req.session.userId) {
    req.flash("error", "plelase try to login first");
    // return res.redirect("/login");
  }
  next()
}