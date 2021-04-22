//fs->file system

const fsKaObject=require("fs");
console.log(fsKaObject);
//utf-8 means plain text
//readFileSync-.data return binary form .so we include utf-8 in it
let f1KaData=fsKaObject.readFileSync("./f1.txt","utf-8");
console.log(f1KaData);
//or
//let f1KaData=fsKaObject.readFileSync("./f1.txt");
//console.log(f1KaData+" ");

fsKaObject.writeFileSync("./index.html","hello!!");
fsKaObject.writeFileSync("../activity/sctivity.js","shjdkhkh");