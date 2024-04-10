const mongoose = require('mongoose');

const patronSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactInformation: {
    type: String
  },
  
});

module.exports = mongoose.model('Patron', patronSchema);
