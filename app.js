const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");


const listings = require("./routes/listing.js");
const reviews  = require("./routes/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/traveling";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await connect(MONGO_URL);
};

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(urlencoded({ extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(static(join(__dirname, "/public")));

const sessaionOptions = {
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
    cookie: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
};

app.use(session(sessaionOptions));
app.use(flash());

app.get("/", (req, res) => {
    res.send("Hi i'm root!");
});


app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page not found !"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
});

app.get((res, req, next) => {
    console.log("h");
});

app.listen(8080, () => {
    console.log("server is listening to the port 8080");
});
