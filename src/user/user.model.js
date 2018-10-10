const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

schema.pre('save', async function (next) {
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

const User = mongoose.model('user', schema);

module.exports = User;