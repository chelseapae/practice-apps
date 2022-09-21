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

// Needed to receive json data
app.use(express.json());

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//send information from the client and save to the DB
app.post('/Confirmation', (req, res) => {
  console.log('BACKEND REQ.body ', req.body)
  var queryString = `INSERT INTO responses (
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
    VALUES (
   '${req.body.name}',
   '${req.body.email}',
   '${req.body.password}',
   '${req.body.address1}',
   '${req.body.address2}',
   '${req.body.city}',
   '${req.body.state}',
   '${req.body.zipcode}',
   '${req.body.phone}',
   '${req.body.cc}',
   '${req.body.expiration}',
   '${req.body.cvv}',
   '${req.body.billingZip}'
    )`
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('post query error', err)
    } else {
      res.status(201).send("Purcha$e $uce$$ful!")
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
