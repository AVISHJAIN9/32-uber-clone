const express = require('express');
const router = express.Router();
const captaincontroller = require('../controllers/captain.controller');
const { body } = require('express-validator');






router.post('/register',[
    body('fullname').notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').notEmpty().withMessage('Vechicle color is required'),
    body('vechicle.plate').notEmpty().withMessage('Vechicle plate is required'),
    body('vechicle.capacity').isInt({min:1}).withMessage('Vechicle capacity must be at least 1'),
    body('vechicle.vehicletype').notEmpty().withMessage('Vechicle type is required'),
],
captaincontroller.registerCaptain
);








module.exports = router;