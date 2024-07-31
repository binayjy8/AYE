const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: String,
    descrition: String,
    image: String,
    price: Number,
    location: String,
    country: String,
});