const mongoose = require('mongoose');
const ENVIRONMENT = process.env.ENVIRON || 'dev';

mongoose.Promise = Promise;

module.exports = () => {
    if (ENVIRONMENT === 'production') {

    } else {
        mongoose.connect('mongodb://localhost/test');

        mongoose.connection.on('error', (e) => {
            if (e.message.code === 'ETIMEDOUT') {
                console.log(e);
            }
        });

        mongoose.connection.once('open', () => {
            console.log(`MongoDB succesfully connected to database ${mongoose.connection.db.databaseName}.`);
        });
    }
};
