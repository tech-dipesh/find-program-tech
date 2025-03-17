const express=require("express");
const router=express.Router();
const wrapAsync=require("../middleware/wrapAsync.js")
const controllerTool=require("./controller.js");
const newTool=require("./model.js");

router.route("/:id/edit")
.get(wrapAsync(controllerTool.idEditGet))
.post( wrapAsync(controllerTool.idEditPost))
console.log("this is router.js");

router.route("/:id")
.get(wrapAsync(controllerTool.ShowIdGet))
.post(wrapAsync(controllerTool.ShowIdPost))
module.exports=router;