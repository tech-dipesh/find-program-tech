const express = require("express");
const app = express();
const value = require("./Tool/model.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors=require("cors");

const {userSchma, newListing}=require("./Schema.js");
const newTool = require("./Tool/model.js");
const developerTools = require("./data.js");
const SignupListing = require("./Register/model.js");
const expressError = require("./middleware/expressError.js");
const wrapAsync = require("./middleware/wrapAsync.js");
let registerRoute=require("./Register/route.js");
let listingRoute=require("./Tool/route.js")

let path = process.env.MYCUSTOMPATH || 5000;


app.use((wrapAsync));// don't need this as of now
app.use(helmet());

app.use(express.urlencoded({ extended: true }));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// // serve the static files.

// app.use(express.static(path.join(__dirname, "views")));
app.listen(path, ()=>{
  console.log(`port is listening to: localhost:${path}`)
})
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURL);
  console.log("connected to the database")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(registerRoute);
app.use("/show", listingRoute);
// app.use(expressError);
app.use("*", (req, res)=>{
  try {
    res.send(`Your are trying to access the:is doesn't exist yet.`);
  } catch (error) {
    res.send(error);
  }
});

app.use((err, req, res, next)=>{ 
  res.status(500, "something wrong on app.js");
})