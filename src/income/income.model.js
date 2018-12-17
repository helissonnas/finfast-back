const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        max: 240
    },
    type_id : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'type',
        required: true
    },
    value : {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
});

const Income = mongoose.model('income', schema);

module.exports = Income;
