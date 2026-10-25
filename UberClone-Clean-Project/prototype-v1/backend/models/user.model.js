const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    },
    socketid: {
        type: String,
    },
});

userschema.methods.generateauthtoken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

// provide camelCase alias
userschema.methods.generateAuthToken = userschema.methods.generateauthtoken;

userschema.methods.comparepassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userschema.statics.hashpassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const usermodel = mongoose.model('user', userschema);
module.exports = usermodel;