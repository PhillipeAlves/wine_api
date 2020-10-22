const router = require("express").Router();

router.use("/region", require("./region"));
router.use("/variety", require("./variety"));
router.use("/year", require("./year"));
router.use("/year-variety", require("./yearVariety"));

module.exports = router;
