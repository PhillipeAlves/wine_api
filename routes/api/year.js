const router = require("express").Router();
const search = require("../../helpers/search");

router.get("/", function (_, res) {
  res.send({
    status: "error",
    message: "please provide a lot number",
  });
});

router.get("/:search", (req, res) => {
  try {
    const response = search(req.params.search, ["year"]);
    res.json(response);
  } catch (err) {
    res.status(400).send({ status: 404, message: "not found" });
  }
});

module.exports = router;
