const EventEmiiter = require('events');

const customEmitter = new EventEmiiter();

customEmitter.on('response', (name, id) => {
    console.log(`data received: ${name}, ${id}`)
});

customEmitter.on('response', () => {
    console.log('some other logic here.')
});

customEmitter.emit('response', 'john', 34);

/* const http = require('http');

const server = http.createServer()

server.on('request', (req, res)=>{
    res.end("welcome");
});

server.listen(5000, () => {
    console.log("server running on port 5000");
}); */