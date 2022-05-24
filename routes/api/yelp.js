const express = require("express");
const router = express.Router();
const yelpCtrl = require("../../controllers/yelp");

/*---------- Public Routes ----------*/
router.get("/search/:location/:term", yelpCtrl.search);


/*---------- Protected Routes ----------*/

module.exports = router;
