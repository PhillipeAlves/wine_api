const express = require("express");
const router = express.Router();
const getData = require("../../helpers/getData");
const liveSearch = require("../../helpers/liveSearch");
const search = require("../../helpers/search");

// ===LIVE SEARCH===

router.get("/?:search", (req, res) => {
  async function getLiveSearch(input) {
    try {
      const data = await getData();
      const response = liveSearch(data, input);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
  getLiveSearch(req.query.search);
});

// ===SEARCH===

router.get("/search/:search", (req, res) => {
  async function getSearch(input) {
    try {
      const data = await getData();
      const response = search(data, input);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
  getSearch(req.params.search);
});

module.exports = router;
