const fs = require("fs");
//const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");
console.log(htmlKaData); // we have stringified html file !!!

// html file is loaded in cheerio