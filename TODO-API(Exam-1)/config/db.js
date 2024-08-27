const mongoose = require('mongoose');

const dbConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017")
    console.log("Connect to MongoDB");

}

module.exports = dbConnect