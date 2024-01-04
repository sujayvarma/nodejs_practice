const fs = require("fs");

const bioData = {
    name : "vinod",
    age : 26,
    channel : "thapa",
};

console.log(bioData.channel);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// console.log(jsonData.channel) gives error

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.channel);

fs.writeFile('json1.json', jsonData, (err) =>{
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) =>{
    console.log(data);
})