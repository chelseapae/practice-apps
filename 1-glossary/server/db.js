require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary', { useNewUrlParser: true, useUnifiedTopology: true });

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  word: String,
  definition: String
});

let Glossery = mongoose.model('Glossery', glossarySchema);

// let save = (words) => {
//   // This function saves info to DB
//   words.forEach((word) => {
//     var newWord = new Word({
//       id: word.id,
//       word: word.word,
//       definition: word.definition
//     })
//     newWord.save((err, data) => {
//       if (err) {
//         console.log('Error with saving data to DB');
//       } else {
//         console.log('Success with saving data to DB', data);
//       }
//     });
//   })
// }

// module.exports.save = save;