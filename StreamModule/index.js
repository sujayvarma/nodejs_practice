const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // 1st way not file streaming; at a stretch only
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // });

    //2nd way
//     const rstream = fs.createReadStream('input.txt');

//     rstream.on('data', (chunkdata) =>{ //4 events: data, end, error, finish
//         res.write(chunkdata);
//     });
//     rstream.on('end', () => {
//         res.end();
//     });
//     rstream.on('error', (err) => {
//         console.log(err);
//         res.end("file not found");
//     })

    //3rd way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");