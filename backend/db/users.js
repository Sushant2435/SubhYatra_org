const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
    mobile_number: Number,
    address: String,
});
module.exports = mongoose.model('users', userSchema)

