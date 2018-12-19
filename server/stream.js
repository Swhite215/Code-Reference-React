const fs = require("fs");

//Readable Stream
const stream = fs.createReadStream("./blah.txt", "UTF-8");

let data = "";

//Listen for first data event
stream.once("data", () => {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

//Listens for every data event
stream.on("data", chunk => {
    process.stdout.write(`Chunk: ${chunk.length} |`);

    data += chunk;
});

//Listens for end event
stream.on("end", () => {
    console.log("\n\n\n");
    console.log(`Finished Reading File: ${data.length}`);
    console.log("\n\n\n");
});

//Writable Stream
const writeStream = fs.createWriteStream("writeTest.txt");
writeStream.write(`Hello, this is random text \n`);
writeStream.write(`Hello, this is more random text \n`);
