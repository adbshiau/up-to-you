const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviews");

/*---------- Public Routes ----------*/
router.post("/businesses/:id/reviews", reviewsCtrl.create);



/*---------- Protected Routes ----------*/

module.exports = router;