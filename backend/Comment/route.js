const express = require("express");
const router = express.Router();
const wrapAsync = require("../middleware/wrapAsync.js");
const { getComment, postComment, handleVote, getVotes, contactModule } = require("./controller.js");

 // router.post("/:id/Like", wrapAsync(Like))
  // router.post("/:id/disLike",  wrapAsync(disLike));;


router.post('/:id/like', wrapAsync((req, res) => handleVote(req, res, 'like')));
router.post('/:id/dislike', wrapAsync((req, res) => handleVote(req, res, 'dislike')));
router.get('/:id/votes', wrapAsync(getVotes));

router.route("/:id/comment")
.get( wrapAsync(getComment))
// .post( wrapAsync, isLoggedIn(postComment))
.post( wrapAsync(postComment))

//contacr form
router.post("/contact", wrapAsync(contactModule));
