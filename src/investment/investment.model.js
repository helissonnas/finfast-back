const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        max: 240
    },
    type : {
        type: String,
        max: 100
    },
    frequency: {
        type: Number,
        required = true
    },
    percent : {
        type: Number,
        required = true
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
});

const Investment = mongoose.model('investment', schema);

module.exports = Investment;