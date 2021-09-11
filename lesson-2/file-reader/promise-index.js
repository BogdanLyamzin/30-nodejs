const fs = require("fs/promises");
// const fs = require("fs").promises;

// (async()=>{
//     try {
//         const data = await fs.readFile("files/read.txt", "utf-8");
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// })();

const readFile = async(filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    }
    catch(error){
        throw error;
    }
};

readFile("files/read.txt")
    .then(data => console.log(data))
    .catch(error => console.log(error));

// fs.readFile("files/read.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error)); 