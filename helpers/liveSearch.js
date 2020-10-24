const liveSearch = (data, query) => {
  return data.filter((record) => {
    for (let _ in record) {
      if (record.description) {
        return record.lotCode.includes(query.toUpperCase()) ||
          record.description.includes(query)
          ? record
          : "";
      }
    }
  });
};

module.exports = liveSearch;
