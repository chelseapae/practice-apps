require("dotenv").config();
const express = require('express');
let app = express();
const db = require('./db.js')

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: false }))


//this is a route that takes the word and definition, then saves it to the DB
app.post('/glossary', function (req, res) {
  console.log('REQ BODY', req.body)

  return db.save(req.body)
    .then((data)=> {
      res.status(201, data)
    })
    .catch((err) => {
      console.log(err)
      res.status(404, 'post failed')
    })
});

//this is a route that sends back the existing words/definitions from the DB to the client?
app.get('/glossary', function (req, res) {
  res.send('get is working')
});

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});
