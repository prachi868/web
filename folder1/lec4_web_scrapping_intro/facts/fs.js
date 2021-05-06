// in pab11 folder
//npm init -y
//npm install cheerio

const fs=require("fs");
const cheerio=require("cheerio");
let htmlKaData=fs.readFileSync("./index.html","utf8");
//console.log(htmlKaData); //we have stringified html file

//html file is loaded in cheerio
let myDocument=cheerio.load(htmlKaData);
//console.log(myDocument);

//document.querySelector("h1");
let h1Element= myDocument("h1");
//console.log(h1Element); element->cheerio -> object form mei data

let h1KaDataElement=myDocument("h1").text();
console.log(h1KaDataElement);