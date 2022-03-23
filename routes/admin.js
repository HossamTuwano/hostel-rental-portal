const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.post("/add-accommodation", adminController.postAddAccommodation);

module.exports = router;
