const fs = require("fs");

fs.readFile("data.txt", 'utf8', (err, data) => {
    if(err) {
        console.error("Unable to read file : ", err)
        return;
    }
    console.log('File Content: ', data);
});