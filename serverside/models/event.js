const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema
  const eventSchema = new mongoose.Schema({
    booktitle:  { type: String, required: true},
    eventtitle:  { type: String, required: true},
    eventurl:  { type: String, required: false},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    country: {type: String, required: true},
    startdate: {type: String, required: false},
    starttime: {type: String, required: false},
    enddate: {type: String, required: false},
    endtime: {type: String, required: false},
    eventdescription: {type: String, required: true},
    organizername: {type: String, required: true},

  });

//use the blueprint to create the model
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model('Event', eventSchema,'Events');
