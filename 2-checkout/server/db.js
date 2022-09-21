require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
  .then(() =>
    // Expand this table definition as needed:
    // define schema here
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(50) NOT NULL,
        address1 VARCHAR(100) NOT NULL,
        address2 VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        state VARCHAR(30) NOT NULL,
        zipcode VARCHAR(10) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        cc VARCHAR(20) NOT NULL,
        expiration VARCHAR(10) NOT NULL,
        cvv VARCHAR(30) NOT NULL,
        billingZip VARCHAR(10) NOT NULL
        )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
