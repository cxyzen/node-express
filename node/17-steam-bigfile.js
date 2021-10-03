const http = require('http');
const fs = require('fs');

http
    .createServer((req, res)=>{
        // send whole file
        /* const text = fs.readFileSync('./content/superbig.txt', 'utf-8');
        res.end(text); */

        // send chunks instead of whole file
        const fileStream = fs.createReadStream('./content/superbig.txt', 'utf-8');
        fileStream.on('open', ()=>{
            fileStream.pipe(res);
        });
        fileStream.on('error', (err)=>{
            res.end(err);
        });

    })
    .listen(5000, ()=>{
        console.log("server running on port 5000");
    })