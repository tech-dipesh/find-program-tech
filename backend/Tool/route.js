const express = require("express");
const router = express.Router();
const wrapAsync = require("../middleware/wrapAsync.js");
const controllerTool = require("./controller.js");
const { isLoggedIn } = require("../middleware/isLoggedIn.js");
const {LikeListing}=require("../Comment/route.js");

// Route for new tool page
router.get("/new", isLoggedIn, (req, res) => {
  res.render("new.ejs");
});

// Routes for listing tools
router.route("/")
  .get(wrapAsync(controllerTool.showIdGet))
  .post(isLoggedIn, wrapAsync(controllerTool.showIdPost));

// Route for individual tool details
router.route("/:id")
  .get(wrapAsync(controllerTool.individualListingGet))
  .delete(wrapAsync(controllerTool.deleteListing));

router.post("/:id/like", isLoggedIn, (LikeListing));

// Route for editing a tool
router.route("/:id/edit")
  .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
  .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

module.exports = router;