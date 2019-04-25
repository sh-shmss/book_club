const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema
  const clubSchema = new mongoose.Schema({
    clubName:  { type: String, required: true},
    createdOn:  { type: String, required: true},
    bookTitle:  { type: String, required: true},
    isbn:  { type: String, required: true},
    author:  { type: String, required: true},
    members:  { type: String, required: true},

  });

//use the blueprint to create the model
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model('Club', clubSchema,'Clubs');
//note capital S in the collection name
