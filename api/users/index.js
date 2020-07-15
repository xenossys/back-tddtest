var express = require("express");
var router = express.Router();
const ctrl = require("./users.ctrl");

/* GET home page. */
router.get("/", ctrl.index);
router.get("/:id", ctrl.show);

module.exports = router;
