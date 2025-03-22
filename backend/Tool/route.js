const express=require("express");
const router=express.Router();
const wrapAsync=require("../middleware/wrapAsync.js")
const controllerTool=require("./controller.js");
const newTool=require("./model.js");
const validateListing=require("../middleware/validateListing.js");


router.route("/")
.get(wrapAsync(controllerTool.showIdGet))
.post(validateListing, wrapAsync (controllerTool.showIdPost))


router.route("/new")
.get(wrapAsync(async (req, res)=>{
  res.render("new.ejs");
}))
.post(wrapAsync(controllerTool.createNew))


router.route("/tools/:id/edit")
.get(wrapAsync(controllerTool.idEditGet))
.put( wrapAsync(controllerTool.idEditPut))

router.route("/tools/:id")
.get(wrapAsync(controllerTool.individualListingGet))
.delete(wrapAsync(controllerTool.deleteListing))

module.exports=router;