const liveSearch = (data, query) => {
  return data.filter((record) => {
    for (let _ in record) {
      if (record.description && query) {
        return record.description.includes(query) ? record : "";
      } else {
        return record.lotCode.includes(query.toUpperCase()) ? record : "";
      }
    }
  });
};

module.exports = liveSearch;
