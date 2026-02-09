const fs = require("fs");

fs.writeFile("data.txt", "Learning NodeJS FS", (err)=>{
    if(err){
        console.error("Error writing to file: ", err);
        return;
    }
    console.log("File written successfully!")
})