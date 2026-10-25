const mongoose = require('mongoose');


function connectToDb() {
    const mongoUri = process.env.DB_CONNECT || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/uber-clone';
    mongoose.connect(mongoUri
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log('Database Connection Error:', err.message));
}


module.exports = connectToDb;