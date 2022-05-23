const express = require("express");
const router = express.Router();
const businessesCtrl = require("../../controllers/yelp");

/*---------- Public Routes ----------*/
router.get("/search/:location/:term", businessesCtrl.search);


/*---------- Protected Routes ----------*/

module.exports = router;
