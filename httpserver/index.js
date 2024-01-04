
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/")
    {
    res.end('Hello from the home');
    }
    else if(req.url == "/about")
    {
        res.end("Hello from about");
    }
    else if(req.url == "/contact")
    {
        res.end("Hello from contact");
    }
    else 
    {
        res.writeHead(404,{"Content-type":"test/html"} );
        res.end("<h1>Page does not exist</h1>");
    }
}); 

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no 8000");
});