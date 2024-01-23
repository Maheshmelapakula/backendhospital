// models/Appointment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: { type: String, required: true },
  // Add other appointment fields
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
