const Booking = require('../models/booking.model');
const Captain = require('../models/captain.model');

module.exports.createBooking = async (req, res, next) => {
  try {
    const { pickup, destination } = req.body;
    if (!pickup || !destination) return res.status(400).json({ message: 'pickup and destination required' });

    const userId = (req.user && req.user._id) || req.body.user;

    const booking = await Booking.create({ pickup, destination, user: userId });

    // Optionally try to find an available captain (simple nearest or any available)
    const captain = await Captain.findOne({ status: 'available' });
  if (captain) {
      booking.assignedCaptain = captain._id;
      booking.status = 'assigned';
      await booking.save();
    }

  return res.status(201).json({ booking, bookingId: booking._id });
  } catch (err) {
    next(err);
  }
};

module.exports.getBookingStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate('assignedCaptain', 'fullname vechicle');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    return res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};
