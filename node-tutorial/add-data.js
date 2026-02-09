const fs = require("fs");

const newText = "\n Thius line was added without deleting the existing content";

// append 
fs.appendFile("data.txt", newText, (err) => {
    if(err){
        console.error(err)
        return;
    }

    console.log("Text appended successfully1");
})