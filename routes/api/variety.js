const router = require("express").Router();
const fs = require("fs");

router.get("/", function (req, res, next) {
  try {
    const data = fs.readFileSync("./public/data/11YVCHAR001.json", "utf8");
    res.send(data);
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
});

module.exports = router;
