const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const abnormalSymptoms = new Schema({
abnormalsymptoms: {
  type: String,
  },
patientName: {
  type: String,
  },
  doctorName: {
  type : String
 }
  });
  module.exports = mongoose.model('AbnormalSymptoms', abnormalSymptoms);