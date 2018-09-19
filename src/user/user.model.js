const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        max: 50,
        required: true
    },
    email: {
        type: String,
        max: 100,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', schema);

module.exports = User;