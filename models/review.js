const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comments: String,
    reting: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        defalut
    }
});