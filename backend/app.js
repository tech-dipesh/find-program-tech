const express = require("express");
const app = express();
const value = require("./Tool/model.js");
const { userSchma, newListing } = require("./middleware/schema.js");
const newTool = require("./Tool/model.js");
const data = require("./data/data.js");
const signupListing = require("./Register/model.js");
const expressError = require("./middleware/expressError.js");
let registerRoute = require("./Register/route.js");
let listingRoute = require("./Tool/route.js");
let User=require("./Register/model.js");

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const ejs=require("ejs")
const path=require("path")
const methodOverride=require("method-override");
const flash=require("connect-flash");
const session=require("express-session");
let passport=require("passport");
let localStrategy=require("passport-local");
let bcrypt=require("bcrypt");

let port = process.env.MYCUSTOMPATH || 5000;
//My engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//My Middleware
app.use(methodOverride("_method"))
// app.use(session({
//   secret: process.env.SECRET,
//   resave: true,
//   saveUninitialized: false,
//   cookie:{
//     // expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     httpOnly:true,
//     maxAge: 5*60*1000
//   }
// }))
app.use(session({
  secret: process.env.SECRET,
  resave: false,  // Changed from true
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure in production
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}))


app.use(flash());
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//Passport.js Middleware routes
app.use(passport.initialize());
app.use(passport.session());
// app.use()
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURL);
  console.log("connected to the database");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(cors({
  origin: 'http://localhost:5173', // Your React port
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.use(async (req, res, next) => {
  if (req.session.userId) {
    try {
      const user = await signupListing.findById(req.session.userId);
      req.user = user;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

app.use(( req, res, next) => {
  // res.status(500).render("listing.ejs");
  res.locals.success=req.flash("success")
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user
  // res.locals.fullName=req.user.fullName;
  res.locals.yourName = req.user ? req.user.yourName : null;
  next()
});

app.use("/tools", listingRoute)
// app.use("/new", listingRoute)
app.use("/", registerRoute);
// app.use(expressError);

// app.use("*", (req, res) => {
  //   try {
    //     res.send(`Your are trying to access the:is doesn't exist yet.`);
    //   } catch (error) {
  //     res.send(error);
  //   }
  // });


app.listen(port, () => {
  console.log(`port is listening to: localhost:${port}`);
});

app.all("*",(req, res)=>res.redirect("tools"));