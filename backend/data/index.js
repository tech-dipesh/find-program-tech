const mongoose=require("mongoose");
const addData=require("./data.js");
const modelListing=require("../Tool/model.js");


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/techtest');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const addData=async ()=>{
  await modelListing.deleteMany({});
  await modelListing.insertMany(addData.data);
  console.log("this is the data of data/index.js");
}
addData()