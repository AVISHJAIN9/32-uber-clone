const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainschema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"Firstname must be at least 3 characters long"],
        },
        lastname:{
            type:String,
            required:true,
            minlength:[3,"Lastname must be at least 3 characters long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,   
    },
    socketid:{
        type:String,
    },
    status:{
        type:String,
        enum:['available','unavailable'],
        default:'unavailable'
    },
    vechicle:{
        color:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            required:true,
            unique:true,
            minlength:[6,"Plate must be at least 6 characters long"],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"Capacity must be at least 1"],
        },
        vehicletype:{
            type:String,
            required:true,
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            }
        }

    },

})

captainschema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

// backward-compatible alias
captainschema.methods.generateauthtoken = captainschema.methods.generateAuthToken;

captainschema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainschema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const captainmodel = mongoose.model('Captain', captainschema);
module.exports = captainmodel;