const fs = require("fs");

fs.readFile("files/read.txt", "utf-8", (error, data)=>{
    if(error){
        throw error;
    }
    console.log(data);
    // const text = data.toString();
    // console.log(text);
    // console.log(error);
    // console.log(data);
});