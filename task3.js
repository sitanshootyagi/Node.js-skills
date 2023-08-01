
var fs = require('fs');
const fileName = './data.txt';
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${fileName}: ${err.message}`)
      return;
    }
    console.log("Input string=",data);
    const words = data.trim().split(/\s+/);
    const wordCount = words.length;
    console.log("Total word=",wordCount);
})
    


