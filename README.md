# WINE API

## About

This is a simple REST APIs that returns data in JSON format. It describes a breakdown of the TOTAL percentage of year, variety, region and year + variety information for a specific wine, ordered from highest percentage to lowest.

---

### For a live demo:

> **_Frontend:_** [Wine Search App](http://wine-search.surge.sh/) / [github](https://github.com/PhillipeAlves/wine_react)

> **_Backend(API):_** [Wine API](https://fast-wave-08855.herokuapp.com/) / [github](https://github.com/PhillipeAlves/wine_api)

---

## Endpoints

### _/api/search/{lotCode||description}_

> It returns the wine details based on a specific search with all the relevant information of the wine. It takes the lot code of the wine as a parameter

[Sample - Specific Search](https://fast-wave-08855.herokuapp.com/api/search/11YVCHAR001)

### _/api/search?search={lotCode}_

> It supports the searching for wines by the lot code or description of different lists.

[Sample - Live Search](https://fast-wave-08855.herokuapp.com/api/search?search=y)

### _/api/breakdown/year/{lotCode}_

> It returns a breakdown of the total percentage for each unique year value.

[Sample - Year](https://fast-wave-08855.herokuapp.com/api/breakdown/year/15MPPN002-VK)

### _/api/breakdown/variety/{lotCode}_

> It returns a breakdown of the total percentage for each unique variety value.

[Sample - Variety](https://fast-wave-08855.herokuapp.com/api/breakdown/variety/11YVCHAR002)

### _/api/breakdown/region/{lotCode}_

> It returns a breakdown of the total percentage for each unique region value.

[Sample - Region](https://fast-wave-08855.herokuapp.com/api/breakdown/region/15MPPN002-VK)

### _/api/breakdown/year-variety/{lotCode}_

> It returns a breakdown of the total percentage for each unique combination of year and variety.

[Sample - Year & Variety](https://fast-wave-08855.herokuapp.com/api/breakdown/year-variety/15MPPN002-VK)

---

## Examples

**_/api/breakdown/year/11YVCHAR001_**

```
{
    breakDownType: "year",
    breakdown: [
        {
            percentage: "85",
            key: "2011"
        },
        {
            percentage: "15",
            key: "2010" }
    ]
}
```

**_/api/search/11YVCHAR001_**

```
[
    {
        "lotCode": "11YVCHAR001",
        "volume": 1000,
        "description": "2011 Yarra Valley Chardonnay",
        "tankCode": "T25-01",
        "productState": "Ready for bottling",
        "ownerName": "YV Wines Pty Ltd",
        "components": [
            {
                "percentage": 5,
                "year": 2011,
                "variety": "Pinot Noir",
                "region": "Mornington"
            },
            {
                "percentage": 80,
                "year": 2011,
                "variety": "Chardonnay",
                "region": "Yarra Valley"
            },
            {
                "percentage": 5,
                "year": 2010,
                "variety": "Pinot Noir",
                "region": "Macedon"
            },
            {
                "percentage": 10,
                "year": 2010,
                "variety": "Chardonnay",
                "region": "Macedon"
            }
        ]
    }
]
```

---

## Instructions

This is an Node.js/Express.

To get starter:

```
// clone repo

$ git clone https://github.com/PhillipeAlves/wine_api.git

// move into the directory

$ cd wine_api

// install dependencies

$ npm install

// start the server

$ npm run dev (development) || npm run start (production)

```
