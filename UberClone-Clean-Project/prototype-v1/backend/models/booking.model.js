const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pickup: {
    lat: Number,
    lng: Number,
  },
  destination: {
    lat: Number,
    lng: Number,
  },
  status: { type: String, enum: ['requested', 'assigned', 'completed', 'cancelled'], default: 'requested' },
  assignedCaptain: { type: mongoose.Schema.Types.ObjectId, ref: 'Captain', default: null },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
