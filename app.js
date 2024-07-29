const express = require("express")
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/traveling";

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("Hi i'm root");
});

app.listen(8080, () => {
    console.log("server is listening to the port 8080");
});
