const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Must be at the very top
const app = express();
const connectdb = require('./db/db');
const userroutes = require('./routes/user.routes');
const cookieparser = require('cookie-parser');
const captainroutes = require('./routes/captain.routes');
const bookingroutes = require('./routes/booking.routes');

// Connect to database
connectdb();

// Middlewares
// CORS: allow the CRA dev server and allow credentials (cookies).
// For production, replace the origin with your deployed frontend origin
// or use a stricter policy.
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
// Ensure preflight requests receive the CORS headers
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser()); // Corrected variable usage

// Health Check
app.get('/', (req, res) => res.status(200).send('Uber API is running'));

// Mount routes
app.use('/users', userroutes);
app.use('/captains', captainroutes);
app.use('/bookings', bookingroutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

module.exports = app;