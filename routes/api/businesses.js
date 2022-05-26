const express = require("express");
const router = express.Router();
const businessesCtrl = require("../../controllers/businesses");

/*---------- Public Routes ----------*/
router.post("/", businessesCtrl.create);
router.get("/all", businessesCtrl.allBusinesses);
router.delete("/:id", businessesCtrl.delete);
router.get("/:id", businessesCtrl.show);
router.get("/", businessesCtrl.index);


/*---------- Protected Routes ----------*/

module.exports = router;