const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviews");
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)

/*---------- Public Routes ----------*/
router.post("/businesses/:id/reviews", upload.single('photo'), reviewsCtrl.create);



/*---------- Protected Routes ----------*/

module.exports = router;