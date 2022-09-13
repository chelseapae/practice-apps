require("dotenv").config();
const mongoose = require("mongoose");
const { ModuleFilenameHelpers } = require("webpack");

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = mongoose.Schema({
  word: String,
  definition: String
});

let Glossary = mongoose.model('Glossary', glossarySchema);

// let save = (words) => {
//   //this should save the word and definition to the DB
// }

module.exports.Glossary = Glossary;