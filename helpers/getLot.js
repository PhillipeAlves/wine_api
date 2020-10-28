const fs = require("fs");

const getLotByCode = (search, type) => {
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

  // ===GET UNIQUE KEYS===
  const isSigleValue = wines[0].key.year && wines[0].key.variety ? false : true

  // ===CREATE ARRAY WITH RESULTS===
  const getResults = () => {
    let results = [];
    let match;
    wines.filter((wine) => {
      if (isSigleValue) {
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
    return results
  }

  const finalResults = getResults()

  // ===SORT FROM HIGHEST TO LOWEST===
  const breakdown = finalResults.sort((a, b) => {
    return parseFloat(b.percentage) - parseFloat(a.percentage);
  });

  return {
    breakDownType: breakdownType,
    breakdown: breakdown,
  };
};

module.exports = getLotByCode;
