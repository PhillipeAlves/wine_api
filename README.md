# WINE API

## About

This is a simple REST APIs that return some JSON data that describes a breakdown of the TOTAL percentage of year, variety, region and year + variety information for a specific wine, ordered from highest percentage to lowest.

---

### For a live demo:

> **_Frontend:_** [Wine Search App](http://wine-search.surge.sh/) / [github](https://github.com/PhillipeAlves/wine_react)

> **_Backend(API):_** [Wine API](https://fast-wave-08855.herokuapp.com/) / [github](https://github.com/PhillipeAlves/wine_api)

---

## Endpoint

### _/api/search?search={search}_

> It returns the wine details for a specific search with all the relevant details of the wine. It takes the lot code of the wine as a parameter

### _/api/search/{lotCode||description}_

> It supports the searching for wines by the lot code or description of different lists.

### _/api/breakdown/year/{lotCode}_

> It returns a breakdown of the TOTAL percentage for each unique year value.

### _/api/breakdown/variety/{lotCode}_

> It returns a breakdown of the TOTAL percentage for each unique variety value.

### _/api/breakdown/region/{lotCode}_

> It returns a breakdown of the TOTAL percentage for each unique region value.

### _/api/breakdown/year-variety/{lotCode}_

> It returns a breakdown of the TOTAL percentage for each unique combination of year and variety.

---

## Example

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
