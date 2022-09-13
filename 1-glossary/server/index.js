require("dotenv").config();
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: false }))

//this is a route that takes the word and definition, then saves it to the DB?
app.post('/', function (req, res) {
  res.send('post is working')
});


//this is a route that sends back the existing words/definitions from the DB to the client?
app.get('/å', function (req, res) {
  res.send('get is working')
});

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});
