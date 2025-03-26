const express = require("express");
const router = express.Router();
const wrapAsync = require("../middleware/wrapAsync.js");
const controllerTool = require("./controller.js");
const { isLoggedIn } = require("../middleware/isLoggedIn.js");
const {LikeListing}=require("../Comment/route.js");
let {Like, DisLike}=require("../Comment/route.js");
const { preferences } = require("joi");

router.get("/new", isLoggedIn, (req, res) => {
  res.render("new.ejs");
});

router.route("/")
  .get(wrapAsync(controllerTool.showIdGet))
  .post(isLoggedIn, wrapAsync(controllerTool.showIdPost));

router.route("/:id")
  .get(wrapAsync(controllerTool.individualListingGet))
  .delete(wrapAsync(controllerTool.deleteListing));

router.post("/:id/Like", isLoggedIn, wrapAsync(Like))
router.post("/:id/DisLike", isLoggedIn, wrapAsync(DisLike));;

router.route("/:id/edit")
  .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
  .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

module.exports = router;