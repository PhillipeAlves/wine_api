const router = require("express").Router();
const getLotByCode = require("../../helpers/getLot");

router.get("/", (_, res) => {
  res.send({
    status: "error",
    message: "please provide a lot number",
  });
});

router.get("/:lotcode", (req, res) => {
  try {
    const response = getLotByCode(req.params.lotcode, ["variety"]);
    res.json(response);
  } catch (err) {
    res.status(400).send({ status: 404, message: "not found" });
  }
});

module.exports = router;
