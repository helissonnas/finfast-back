const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        max: 240
    },
    frequency: {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    }
});

const Type = mongoose.model('type', schema);

module.exports = Type;
