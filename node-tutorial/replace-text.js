const fs = require("fs");

fs.readFile("data.txt", 'utf8', (err, initialData)=> {
    if(err) throw err;

    const newData = initialData.replace("Thius", "This");

    fs.writeFile("data.txt", newData, (err)=>{
        if (err) throw err;
        console.log('Old Data: ', initialData);
        console.log('New Data: ', newData);
    })
})