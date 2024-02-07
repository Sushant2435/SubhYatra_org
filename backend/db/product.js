const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    userId: String,
    title: String,
    type: String,
    image: String,
    isVideo: Boolean,
    images: {
        image1: String,
        image2: String,
        image3: String,
    },
    description: String,
    page_description: String,
    duration: String,
    discount: Number,
    price: Number,
    review_count: Number,
    time: String,
});
module.exports = mongoose.model('Products', productSchema)

