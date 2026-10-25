const mongoose = require('mongoose');




function connectdb() {
    try {
        let uri = process.env.MONGO_URI || process.env.DB_CONNECT || '';
        // strip unsupported legacy query options that sometimes appear in .env
        uri = uri.replace(/,/g, '&');
        uri = uri.replace(/(\?|&)(useNewUrlParser|useUnifiedTopology|useFindAndModify|useCreateIndex)=[^&]*/gi, '');
        // remove any trailing ? or & left behind
        uri = uri.replace(/[?&]+$/, '');
        if (!uri) {
            console.log('No MongoDB URI configured in MONGO_URI or DB_CONNECT');
            return;
        }

        mongoose.connect(uri)
            .then(() => {
                console.log('Connected to database');
            })
            .catch(err => {
                console.log('Error connecting to MongoDB:', err);
            });
    } catch (err) {
        console.log('Database connection failed:', err);
    }
}

module.exports = connectdb;
