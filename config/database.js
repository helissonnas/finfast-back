const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = function () {
    mongoose.connect('mongodb://localhost/test');

    mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
        }
    });

    mongoose.connection.once('open', () => {
        console.log(`MongoDB succesfully connected to database ${mongoose.connection.db.databaseName}.`);
    });
};
