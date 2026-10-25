const captainservices = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vechicle, city } = req.body;

        // Do NOT hash password here. The Model's pre-save hook handles it.
        const captain = await captainservices.createcaptain({
            fullname,
            email,
            password, 
            vechicle,
            city,
        });

        const token = captain.generateAuthToken();

        return res.status(201).json({ 
            message: 'Captain registered successfully', 
            captain, 
            token 
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Email or License Plate already exists' });
        }
        next(err);
    }
};