const express = require("express");
const router = express.Router();
const wrapAsync = require("../middleware/wrapAsync.js");
const controllerTool = require("./controller.js");
const { isLoggedIn } = require("../middleware/isLoggedIn.js");

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

// Route for editing a tool
router.route("/:id/edit")
  .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
  .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

module.exports = router;