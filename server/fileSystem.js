//FS Module
//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//Two Forms - Asynchronous or Synchronous - Always use Asynchronous for non-blocking

//Requiring File System
const fs = require("fs");

console.log(fs); // The FS module
console.log(fs.readdirSync("./")); // Synchronous - Returns all the files and folders in the chosen folder
console.log(
    // Asynchronous - returns all the files and folders in the chosen folder
    fs.readdir("./s", (err, files) => {
        if (err) console.log("Error", err);
        else console.log("Result", files);
    })
);
