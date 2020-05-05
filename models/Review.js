const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    description: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
