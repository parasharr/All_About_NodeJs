const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=> {
    const log = `${Date.now()}: ${req.url} New Request Received\n`
    fs.appendFile("log.txt", log, (err, data)=> {
        switch(req.url){
            case "/" : res.end("Welcome to Homepage");
            break;
            case "/about" : res.end("You are on About page");
            break;
            default:
                res.end("404 Not found");
        }
      
    })
});
myServer.listen(80, ()=> console.log("SERVER STARTED!"));

