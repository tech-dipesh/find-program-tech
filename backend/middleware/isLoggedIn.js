const {signupListing}=require("../Register/model.js");
module.exports.isLoggedIn= async(req, res, next)=>{

  if (req.session.userId) {
    const user = await signupListing.findById(req.session.userId);
    req.user = user; // Attach user data to req
  }
  next()
}