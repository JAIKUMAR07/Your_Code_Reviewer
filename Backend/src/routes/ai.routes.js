const express = require("express");
const aiController = require("../controllers/ai.controller");
// express ka router feature use krna
const router = express.Router();

// is route path se  se user  , server ko prompt bhejega
router.post("/get-review", aiController.getReview);
//frontent se backend bhejna
//              aicontroller folder me getresponse fucntion chalega
module.exports = router;
