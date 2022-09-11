require("dotenv").config();
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('get is working')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
