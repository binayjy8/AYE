const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comments: String,
    reting: {
        type: Number,
        mi
    }
});