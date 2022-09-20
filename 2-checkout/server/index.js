require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//send information from the client and save to the DB
app.post('/homepage', (req, res) => {
  var queryString = `INSERT INTO responses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name,
    email,
    password,
    address1,
    address2,
    city,
    state,
    zipcode,
    phone,
    cc,
    expiration,
    cvv,
    billingZip
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('post query error')
    } else {
      res.status(201).send("Purcha$e $uce$$ful!")
    }
  })
})

//retrieve just the current session's information to render on client
app.get('/homepage', (req, res) => {
  res.send(console.log('get is working'))
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
