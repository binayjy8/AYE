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

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title: "My new Villa",
//         descrition: "By the beach",
//         price: 2100,
//         location: "Sea beach, mumbai",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successfull");
// });

app.listen(8080, () => {
    console.log("server is listening to the port 8080");
});
