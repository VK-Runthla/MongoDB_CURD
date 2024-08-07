const mongoose = require('mongoose');

const connectDb = async ()=>{
   try {
       await mongoose.connect("mongodb://localhost:27017/Validation");
       console.log("Connected to MongoDB");
   } catch (err) {
       console.log("An error occurred", err);
   }
}

connectDb()

module.exports = connectDb;