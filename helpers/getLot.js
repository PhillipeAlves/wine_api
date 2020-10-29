const fs = require("fs");

const getDataFromFiles = (search, type) => {

    // ===BREAKDOWN TYPE===
    const breakdownType = type.length === 1 ? type[0] : `${type[0]} & ${type[1]}`;

    // ===BREAKDOWN DATA===
    const data = fs.readFileSync(`./public/data/${search}.json`, "utf8");
    const parsedData = JSON.parse(data);
    
    // ===CREATE OBJECT FROM DATA===
    const wines = parsedData.components.map((wine) => {
      return {
        percentage: wine.percentage,
        key:
          type.length === 1
            ? wine[type[0]]
            : { [type[0]]: wine[type[0]], [type[1]]: wine[type[1]] },
      };
    });

    return { wines, breakdownType }
}

const getResults = (wines, type) => {
  const isSingleValue = type.length === 1 ? true : false
  let results = [];
  let match;
  wines.forEach( wine => {
    if (isSingleValue) {
      match = results.findIndex(result => (result.key === wine.key));
      if (match <= -1) {
        results.push(wine);
      } else {
        results.forEach(result => (result.key === wine.key) ? result.percentage += wine.percentage : '')
      }
    } else {
      match = results.findIndex(result => (result.key.year === wine.key.year && result.key.variety === wine.key.variety));
      if (match <= -1) {
        results.push(wine);
      } else {
        results.forEach(result => (result.key.year === wine.key.year && result.key.variety === wine.key.variety) ? result.percentage += wine.percentage : '')
      }
    }    
  })
   // ===SORT FROM HIGHEST TO LOWEST===
  return results.sort((a, b) => {
    return parseFloat(b.percentage) - parseFloat(a.percentage);
  });
}

const getLotByCode = (search, type) => {

  const { wines, breakdownType } = getDataFromFiles(search, type)

  const breakdown = getResults(wines, type)

  return {
    breakDownType: breakdownType,
    breakdown: breakdown,
  };
};

module.exports = getLotByCode;
