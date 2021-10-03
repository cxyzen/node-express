const http = require('http');
const server = http.createServer();
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle= readFileSync('./navbar-app/styles.css');
const homeSvg = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

server.on("request", (req, res)=>{
    const url = req.url;
    console.log(url);
    if (url == '/'){
        res.writeHead(200, {
            "content-type": "text/html"
        });
        res.write(homePage);
    } else if (url == "/styles.css"){
        res.writeHead(200, {
            "content-type": "text/css"
        });
        res.write(homeStyle);
    } else if (url == "/logo.svg"){
        res.writeHead(200, {
            "content-type": "text/svg+xml"
        });
        res.write(homeSvg);
    } else if (url == "/browser-app.js"){
        res.writeHead(200, {
            "content-type": "text/javascript"
        });
        res.write(homeLogic);
    } else if (url == "/about"){
        res.writeHead(200, {
            "content-type": "text/html"
        });
        res.write("<h1>About</h1>");
    } else {
        res.writeHead(404, {
            "content-type": "text/html"
        });
        res.write("<h1>Error, Page Not Found.</h1>");
    }
    res.end();
});

server.listen(5000);