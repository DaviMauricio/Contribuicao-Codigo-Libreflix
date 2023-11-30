const mongoose = require('mongoose');

const popUpSchema = new mongoose.Schema({
    totalArrecadado: {
        type: Number,
        required: true
    },
    meta: {
        type: Number,
        required: true
    }
    });

const PopUp = mongoose.model('PopUp', popUpSchema);

module.exports = PopUp;

