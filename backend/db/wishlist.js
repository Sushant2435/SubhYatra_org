const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    title: String,
    type: String,
    image: String,
    description: String,
    page_description: String,
    duration: String,
    discount: Number,
    price: Number,
    review_count: Number,
    time: String,
});

module.exports = mongoose.model('Wishlist', wishListSchema);
