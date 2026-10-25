const captainmodel = require('../models/captain.model');
const jwt = require('jsonwebtoken');
const blacklisttokenmodel = require('../models/blacklisttoken.model');


module.exports.createcaptain = async ({
    Firstname,
    Lastname,
    fullname,
    email,
    password,
    vechicle,
    color,
    plate,
    capacity,
    vehicletype,
}) => {
    // support both shapes: { Firstname, Lastname } or { fullname: { firstname, lastname } }
    const fn = fullname && fullname.firstname ? fullname.firstname : Firstname;
    const ln = fullname && fullname.lastname ? fullname.lastname : Lastname;

    const v = vechicle || (color || plate || capacity || vehicletype ? { color, plate, capacity, vehicletype } : null);

    if (!fn || !ln || !email || !password || !v) {
        throw new Error('All fields are required');
    }

    const existingcaptain = await captainmodel.findOne({ email: email });
    if (existingcaptain) {
        throw new Error('Captain already exists');
    }

    // password hashing is handled by the Captain model pre('save') hook
    const newcaptain = new captainmodel({
        fullname: {
            firstname: fn,
            lastname: ln,
        },
        email,
        password,
        vechicle: {
            color: v.color,
            plate: v.plate,
            capacity: v.capacity,
            vehicletype: v.vehicletype,
        },
    });

    await newcaptain.save();

    return newcaptain;
};