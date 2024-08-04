const express = require("express")
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/traveling";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("Hi i'm root");
});

app.get("/testListing", (req, res) => {
    let sampleListing = new Listing ({
        title: "My new Villa",
        descrition: "By the beach",
        price: 2100,
    })
});

app.listen(8080, () => {
    console.log("server is listening to the port 8080");
});
