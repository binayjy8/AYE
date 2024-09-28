const express = require("express");
const router = express.Router({ merge});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

//Review Route
router.post("/",validateReview,wrapAsync(async (req, res) => {
    console.log();
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.reviews);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

module.exports = router;