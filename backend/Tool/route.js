const express=require("express");
const router=express.Router();
const wrapAsync=require("../middleware/wrapAsync.js")
const controllerTool=require("./controller.js");
const newTool=require("./model.js");
const validateListing=require("../middleware/validateListing.js");
const {isLoggedIn}=require("../middleware/isLoggedIn.js");

router.get("/new", (isLoggedIn, wrapAsync(async (req, res)=>{
  res.render("new.ejs");
})));

router.route("/")
  .get(isLoggedIn, wrapAsync(controllerTool.showIdGet))
  .post(isLoggedIn, wrapAsync(controllerTool.showIdPost));


router.route("/tools/:id/edit")
.get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
.put( wrapAsync(controllerTool.idEditPut))

router.route("/tools/:id")
.get(wrapAsync(controllerTool.individualListingGet))
.delete(wrapAsync(controllerTool.deleteListing))

module.exports=router;