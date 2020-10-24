const search = (data, query) => {
  let record = data.filter((db) => {
    const records = Object.keys(db);
    return records.find((key) => db[key] === query) ? db : false;
  });
  return record;
};

module.exports = search;
