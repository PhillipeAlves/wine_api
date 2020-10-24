const express = require("express");
const router = express.Router();
const getData = require("../../helpers/getData");

// // returns exact match
// const findRecord = (data, query) => {
//   let record = data.filter((db) => {
//     const records = Object.keys(db);
//     return records.find((key) => db[key] === query) ? db : false;
//   });
//   return record;
// };

function liveSearch(data, query) {
  return data.filter((record) => {
    for (let i in record) {
      if (record.description !== null) {
        return record.lotCode.includes(query) ||
          record.description.includes(query.toUpperCase())
          ? record
          : "";
      }
    }
  });
}

router.get("/?:search", (req, res) => {
  async function findSearch(search) {
    try {
      const data = await getData();
      const response = liveSearch(data, search);
      //   const response = findRecord(records, search);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
  findSearch(req.query.search);
});

module.exports = router;
