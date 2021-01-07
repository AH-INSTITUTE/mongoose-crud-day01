const mongoose = require('mongoose');
const { Schema } = mongoose;

const loveSchema = new Schema({
    bfName: {
        type: String,
        trim: true
    },
    gfName: {
        type: String,
        trim: true
    },
    commit: {
        type: String,
        trim: true
    },
    LovePercent: {
        type: Number,
        trim: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Love', loveSchema);