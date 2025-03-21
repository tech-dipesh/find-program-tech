const express=require("express");
const router=express.Router();
const wrapAsync=require("../middleware/wrapAsync.js")
const controllerTool=require("./controller.js");
const newTool=require("./model.js");
const {check}=require("express-validator");
router.route("/tools/:id/edit")
.get(wrapAsync(controllerTool.idEditGet))
.put( wrapAsync(controllerTool.idEditPut))

router.route("/tools/:id")
.get(wrapAsync(controllerTool.individualListingGet))
.delete(wrapAsync(controllerTool.deleteListing))

router.route("/")
.get(wrapAsync(controllerTool.showIdGet))
// .post(wrapAsync(controllerTool.showIdPost))
.post([    check('Name', 'Name is required and must be a string').not().isEmpty().isString(),
  check('releaseYear', 'Release Year must be a number between 1900 and 2100').isNumeric().isInt({ min: 1900, max: 2100 }),
  check('useCase', 'Use Case is required and must be at least 10 characters').isLength({ min: 10 }),
  check('techStack', 'Tech Stack is required').not().isEmpty(),
  check('Logo', 'Logo must be a valid URL').isURL(),
  check('userName', 'User Name is required').not().isEmpty()],wrapAsync(controllerTool.showIdPost))

router.route("/new")
.get(wrapAsync(async (req, res)=>{
  res.render("new.ejs");
}))
.post(wrapAsync(controllerTool.createNew))
module.exports=router;