const mongoose=require("mongoose");

const resultSchema = mongoose.Schema({
    name:String,
    rollNo:String,
    email:String,
    maths:Number,
    science:Number,
    socialScience:Number,
    secondLanguage:Number,
    firstLanguage:Number,
});

const Result = mongoose.model("Result",resultSchema);
module.exports = Result;

