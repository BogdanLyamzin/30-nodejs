const fs = require("fs/promises");

const fileOperation = async(filePath, type = "read", data = "") => {
    switch(type){
        case "read":
            return await fs.readFile(filePath, "utf-8");
        case "add": 
            await fs.appendFile(filePath, data);
            return await fs.readFile(filePath, "utf-8");
        case "rewrite":
            await fs.writeFile(filePath, data);
            return await fs.readFile(filePath, "utf-8");
        case "remove":
            return await fs.unlink(filePath);
        default: 
            return "Unknown command";
    }
};

// fileOperation("file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// fileOperation("file.txt", "add", "\nНичего я не говорил")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

fileOperation("file.txt", "rewrite", "Ничего я не говорил")
    .then(data => console.log(data))
    .catch(error => console.log(error));

// fileOperation("file.txt", "remove")
//     .then(_ => console.log("Success remove"))
//     .catch(error => console.log(error));

