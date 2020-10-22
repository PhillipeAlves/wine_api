const router = require("express").Router();

// router.get("/", function (req, res, next) {
//   res.render("year", { title: "Year" });
// });

router.get("/:title", function (req, res) {
  res.render("year", { title: req.params.title });
});

module.exports = router;
