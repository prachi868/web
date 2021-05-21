// parallely read contents of f1 f2 and f3 using promisified function
const fs=require("fs");

let f1KaData= fs.promises.readFile("./f1.txt");
f1KaData.then(function(data){
    console.log(data+" ");
})

let f2KaData=fs.promises.readFile("./f2.txt");
f2KaData.then(function(data){
    console.log(data+" ");
})

let f3KaData=fs.promises.readFile("./f3.txt");
f3KaData.then(function(data){
    console.log(data+" ");
})