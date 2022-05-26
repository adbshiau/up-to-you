const express = require("express");
const router = express.Router();
const businessesCtrl = require("../../controllers/businesses");

/*---------- Public Routes ----------*/
router.post("/", businessesCtrl.create);
router.get("/", businessesCtrl.index);
router.delete("/:id", businessesCtrl.delete);
router.get("/:id", businessesCtrl.show);


/*---------- Protected Routes ----------*/

module.exports = router;