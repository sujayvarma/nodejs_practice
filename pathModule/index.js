const path = require("path");

console.log(path.dirname('C:/Users/Sujay/Documents/njtutorial/pathModule/index.js'));

console.log(path.extname('C:/Users/Sujay/Documents/njtutorial/pathModule/index.js'));

console.log(path.basename('C:/Users/Sujay/Documents/njtutorial/pathModule/index.js'));

console.log(path.parse('C:/Users/Sujay/Documents/njtutorial/pathModule/index.js'));

const myPath = path.parse('C:/Users/Sujay/Documents/njtutorial/pathModule/index.js');

console.log(myPath.name);
