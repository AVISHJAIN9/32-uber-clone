const usermodel = require('../models/user.model');
const userservices = require('../services/user.services');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklisttoken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { fullname, email, password } = req.body;
        const hashedpassword = await usermodel.hashpassword(password);

        const user = await userservices.createuser({
            fullname,
            email,
            password: hashedpassword,
        });

    const token = (user.generateAuthToken && user.generateAuthToken()) || (user.generateauthtoken && user.generateauthtoken()) || null;

        return res.status(201).json({ message: 'User registered successfully', user, token });
    } catch (err) {
        next(err);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { email, password } = req.body;

        const user = await usermodel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const ismatch = await user.comparepassword(password);
        if (!ismatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

    const token = (user.generateAuthToken && user.generateAuthToken()) || (user.generateauthtoken && user.generateauthtoken()) || null;

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
        });

        return res.status(200).json({ token, user });
    } catch (err) {
        next(err);
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    try {
        return res.status(200).json({ message: 'User profile fetched successfully', user: req.user });
    } catch (err) {
        next(err);
    }
};

module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');

        const token = (req.cookies && req.cookies.token) || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        if (token) {
            await blacklistTokenModel.create({ token });
        }

        return res.status(200).json({ message: 'logged out' });
    } catch (err) {
        next(err);
    }
};