const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date().now  // Automatically set to current date/time when a review is created
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;