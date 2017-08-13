const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})