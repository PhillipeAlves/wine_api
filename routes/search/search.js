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
      console.log(response);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
  getSearch(req.params.search);
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const getData = require("../../helpers/getData");
// const liveSearch = require("../../helpers/liveSearch");
// const search = require("../../helpers/search");

// async function getSearch(input, type) {
//   try {
//     const data = await getData();
//     let response = "";
//     switch (type) {
//       case "liveSearch":
//         response = liveSearch(data, input);
//         break;
//       case "search":
//         response = search(data, input);
//         break;
//     }
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

// // ===LIVE SEARCH===

// router.get("/?:search", (req, res) => {
//   const response = await getSearch(req.query.search, "liveSearch");
//   res.send(response);
// });

// // ===SEARCH===

// router.get("/search/:search", (req, res) => {
//   const response = getSearch(req.params.search, "search");
//   console.log(response);
//   res.send(response);
// });

// module.exports = router;
