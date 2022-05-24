const express = require("express");
const router = express.Router();
const businessesCtrl = require("../../controllers/businesses");

/*---------- Public Routes ----------*/
router.post("/", businessesCtrl.create);
router.get("/", businessesCtrl.index);


/*---------- Protected Routes ----------*/

module.exports = router;