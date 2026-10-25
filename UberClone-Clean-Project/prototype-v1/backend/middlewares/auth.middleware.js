const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklisttoken.model');
const userModel = require('../models/user.model');

module.exports.authuser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || '';
        const token = (req.cookies && req.cookies.token) || (authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await BlacklistToken.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

