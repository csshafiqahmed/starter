const fs = require("fs");
const server = require("http").createServer();

//Solution 1
server.on("request", (req, res) => {
//   fs.readFile("test-file.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.end(data);
//   });
    
//Solution 2
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end('end of data');
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode=500;
    //     res.end('File not found');
    // })
    //Solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    
});
server.listen(3000, "127.0.0.1", () => {
    console.log("Server running at http://127.0.0.1:3000");
});