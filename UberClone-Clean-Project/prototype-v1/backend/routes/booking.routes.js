const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.authuser, bookingController.createBooking);
router.get('/:id/status', authMiddleware.authuser, bookingController.getBookingStatus);

module.exports = router;
