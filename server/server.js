const express = require(`express`);
let path = require(`path`);
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.json())
app.post('/', function (request, response) {
    let data = request.body;
});
app.use(function (req, res) {
    console.log(req.body);

    res.sendFile(path.join(__dirname, '../index.html'));
});




app.listen(8080);