const fs = require("fs");
const fsPromises = fs.promises;

async function getData() {
  try {
    const files = await fsPromises.readdir("./public/data");
    return files.map((file) => {
      const data = fs.readFileSync(`./public/data/${file}`, "utf8");
      const parsedData = JSON.parse(data);
      return parsedData;
    });
  } catch (err) {
    console.error("Error occured while reading directory!", err);
  }
}

module.exports = getData;
