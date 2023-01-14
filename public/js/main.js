let https = require(`https`);
let fs = require(`fs`);




https.createServer(function (req, res) {
    fs.readFile(`../index.html`, function (err, data) {
        res.writeHead(200, {
            'Content-type': 'text/html',
            'Content-type': 'text.css'
        });
        res.write(data);
        return res.end();
    });
}).listen(8080);