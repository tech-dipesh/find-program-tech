const express=require("express");
const router=express.Router();
const signupListing=require("./model.js");
const expressErrorMiddleware=require("../middleware/expressError.js")
const wrapAsync=require("../middleware/wrapAsync.js")
const registerController=require("./controller.js");

router.get("/current-user", (registerController.userActivity))

router.route("/signup")
.get(wrapAsync (registerController.signupGet))
.post(wrapAsync(registerController.signupPost));

router.route("/login")
.get(wrapAsync(registerController.loginGet))
.post(wrapAsync(registerController.loginPost));


router.route("/logout")
  .get(wrapAsync(registerController.logoutGet))
  .post(wrapAsync(registerController.logoutPost));


module.exports=router;