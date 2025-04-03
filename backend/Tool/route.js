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

router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.route("/")
  .get(wrapAsync(controllerTool.showIdGet))
  .post( wrapAsync(controllerTool.showIdPost));

  // router.post("/:id/Like", wrapAsync(Like))
  // router.post("/:id/disLike",  wrapAsync(disLike));;

  const { handleVote, getVotes } = require("../Comment/route");

router.post('/:id/like', wrapAsync((req, res) => handleVote(req, res, 'like')));
router.post('/:id/dislike', wrapAsync((req, res) => handleVote(req, res, 'dislike')));
router.get('/:id/votes', wrapAsync(getVotes));

router.route("/:id/comment")
.get( wrapAsync(getComment))
// .post( wrapAsync, isLoggedIn(postComment))
.post( wrapAsync(postComment))

router.route("/:id")
  .get(wrapAsync(controllerTool.individualListingGet))
  .delete(wrapAsync(controllerTool.deleteListing));


router.route("/:id/edit")
  .get(isLoggedIn, wrapAsync(controllerTool.idEditGet))
  .put(isLoggedIn, wrapAsync(controllerTool.idEditPut));

module.exports = router;