require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Add this line for the deprecation warning
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

