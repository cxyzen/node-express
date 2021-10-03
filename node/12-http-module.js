const http = require('http');
const server = http.createServer((req, res) => {
    // req: incorming request
    // res: what we sending back
    if (req.url === '/'){
        res.end("Welcome to our homepage");
    } else {
        if (req.url === '/about'){
            res.end("Welcome to our about page");
        } else {
            res.end(`
            <h1>Opps!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href = "/">home</a>
            `);
        }
    }
    
    
})

server.listen(5000, ()=>{
    console.log('server running on port 5000');
});

/* const http = require('http');

const server = http.createServer()

server.on('request', (req, res)=>{
    res.end("welcome");
});

server.listen(5000, () => {
    console.log("server running on port 5000");
}); */