const express = require("express");
const router = express.Router();
const wrapAsync = require("../middleware/wrapAsync.js");
const controllerTool = require("./controller.js");
const { isLoggedIn } = require("../middleware/isLoggedIn.js");
const {LikeListing, getComment, postComment}=require("../Comment/route.js");
let {Like, disLike}=require("../Comment/route.js");
// router.get("/new", isLoggedIn, (req, res) => {
//   res.render("new.ejs");
// });

// router.route("/")
//   .get(wrapAsync(controllerTool.showIdGet))
//   .post(isLoggedIn, wrapAsync(controllerTool.showIdPost));

//   router.post("/:id/Like", isLoggedIn, wrapAsync(Like))
//   router.post("/:id/disLike", isLoggedIn, wrapAsync(disLike));;
// router.route("/:id")
//   .get(wrapAsync(controllerTool.individualListingGet))
//   .delete(wrapAsync(controllerTool.deleteListing));


// router.route("/:id/edit")
//   .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
//   .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

router.get("/new", isLoggedIn, (req, res) => {
  res.render("new.ejs");
});

router.route("/")
  .get(wrapAsync(controllerTool.showIdGet))
  .post(isLoggedIn, wrapAsync(controllerTool.showIdPost));

 
router.route("/:id")
  .get(wrapAsync(controllerTool.individualListingGet))
  .delete(wrapAsync(controllerTool.deleteListing));


router.route("/:id/edit")
  .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
  .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

module.exports = router;