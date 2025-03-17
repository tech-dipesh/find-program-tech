const express=require("express");
const router=express.Router();
const newTool=require("./model.js");
const CommentListing=require("../Comment/model.js");
const expressError=require("../middleware/expressError.js");
module.exports.ShowIdGet=async(req, res)=>{
  // if(error){
  // throw new expressError (500, "express error occured");
  // }
  try {
    let id=req.params.body;
    res.send(`this is id get route ${id}`)
  } catch (error) {
    res.send(`error on the show id get route and the error is: ${error}`)
  }
}

module.exports.showIdPost=async(req, res)=>{
  try {
    let id=req.params.body;
    res.send(`this is id post route ${id}`)
  } catch (error) {
    res.send(`error on the show id post route, and the error is: ${error}`)
  }
}

module.exports.idEditGet=async (req, res) => {
  try {
    let id=req.params.body;
    res.send(`this is id post edit route: ${id}`)
  } catch (error) {
    res.send(`error on the edit id get route and the error is: ${error}`)
  }
}

module.exports.idEditPost=async (req, res) => {
  try {
    let {id}=req.params;
    // let id=req.params.body;
    res.render("listing.ejs", {id});
    // res.send("this is id edit post route");
  } 
  catch (error) {
    res.send(`error on the edit post route and the error is, ${error}`)
  }
}


// module.exports=controllerT ool;