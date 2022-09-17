require("dotenv").config();
const mongoose = require("mongoose");
const { ModuleFilenameHelpers } = require("webpack");
const { v4: uuidv4 } = require('uuid');

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

let save = (wordObj) => {
  //this should save the word and definition to the DB
  console.log('db', wordObj)
  var newWordObj = new Glossary({
    word: wordObj.word,
    definition: wordObj.definition
  })

  return newWordObj.save()
}

let getList = () => {
  return Glossary.find({})
}

let deleteWord = (inputtedWord) => {
  return Glossary.deleteOne({word: inputtedWord})
}

let editWord = (entry) => {
  return Glossary.updateOne(
    {_id: entry._id},
    {word: entry.word, definition: entry.definition}
  )
}

module.exports.Glossary = Glossary;
module.exports.save = save;
module.exports.getList = getList;
module.exports.deleteWord = deleteWord;
module.exports.editWord = editWord;