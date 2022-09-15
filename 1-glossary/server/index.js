require("dotenv").config();
const express = require('express');
let app = express();
const db = require('./db.js')

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: false }))


//this is a route that takes the word and definition, then saves it to the DB
app.post('/glossary', function (req, res) {
  console.log('POST REQ BODY', req.body)

  return db.save(req.body)
    .then((data)=> {
      res.status(201, data)
    })
    .catch((err) => {
      console.log(err)
      res.status(404, 'post failed')
    })
});

//this is a route that sends back the existing words/definitions from the DB to the client
app.get('/glossary', function (req, res) {
  return db.getList()
  .then(data => {
    console.log('DATA IN GET', data)
    res.status(201).send(data)
  })
  .catch((err) => {
    console.log(err)
    res.send('get failed')
  })
});

//this is a route that deletes the selected word from the DB
app.delete('/glossary', function (req, res) {
  db.deleteWord(req.body)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((err => {
      console.log(err)
    }))

});

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});
