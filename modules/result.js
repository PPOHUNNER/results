const mongoose=require("mongoose");

const resultSchema = mongoose.Schema({
    name:String,
    rollNo:String,
    daa:Number,
    dbms:Number,
    fmc:Number,
    mp:Number,
    atfl:Number,
    os:Number,
    daaLab:Number,
    dbmsLab:Number,
    kannada:Number,
    sgpa:Number
});

const Result = mongoose.model("Result",resultSchema);
module.exports = Result;

