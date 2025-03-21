const express = require("express");
const app = express();
const value = require("./Tool/model.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const ejs=require("ejs")
const path=require("path")
const { userSchma, newListing } = require("./schema.js");
const newTool = require("./Tool/model.js");
const data = require("./data/data.js");
const SignupListing = require("./Register/model.js");
const expressError = require("./middleware/expressError.js");
const wrapAsync = require("./middleware/wrapAsync.js");
let registerRoute = require("./Register/route.js");
let listingRoute = require("./Tool/route.js");
const methodOverride=require("method-override");
const flash=require("connect-flash");

let port = process.env.MYCUSTOMPATH || 5000;
//My engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//My Middleware
app.use(methodOverride("_method"))
app.use(flash());
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURL);
  console.log("connected to the database");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use("/tools", listingRoute);
app.use( listingRoute)
app.use("/login", registerRoute);
// app.use(expressError);
  // app.use("*", (req, res) => {
  //   try {
  //     res.send(`Your are trying to access the:is doesn't exist yet.`);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // });

app.use((err, req, res, next) => {
  // res.status(500).render("listing.ejs");
  res.locals.success=flash.success;
  res.locals.error=flash.error;
  next()
});

app.listen(port, () => {
  console.log(`port is listening to: localhost:${port}`);
});