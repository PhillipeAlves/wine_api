const fs = require("fs");

const getLotByCode = (search, type) => {
  // ===BREAKDOWN TYPE===
  const breakdownType = type.length === 1 ? type[0] : `${type[0]} & ${type[1]}`;

  // ===BREAKDOWN DATA===
  const data = fs.readFileSync(`./public/data/${search}.json`, "utf8");
  const parsedData = JSON.parse(data);
  const wines = parsedData.components.map((wine) => {
    return {
      percentage: wine.percentage,
      key:
        type.length === 1
          ? wine[type[0]]
          : { [type[0]]: wine[type[0]], [type[1]]: wine[type[1]] },
    };
  });
  const breakdown = wines.sort(function (a, b) {
    return parseFloat(b.percentage) - parseFloat(a.percentage);
  });

  return {
    breakDownType: breakdownType,
    breakdown: breakdown,
  };
};

module.exports = getLotByCode;
