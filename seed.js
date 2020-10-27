const mongoose = require("mongoose");
const Result = require("./modules/result");
const results = require("./modules/result");
const uri = "mongodb+srv://RFIDpayments:Ff6RfZyRN5arkgvz@payments-ukurt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("CONNECTION OPEN!!!");
}).catch((err)=>{
    console.log(err);
})

let student1 = new Result({
    name:"Prajwal Ponnana",
    rollNo:"1DS18CS093",
    email:"ppothehunner@gmail.com",
    daa:10,
    dbms:9,
    fmc:9,
    mp:10,
    atfl:9,
    os:10,
    daaLab:8,
    dbmsLab:10,
    kannada:9
});
student1.save().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
student1 = new Result({
    name:"Nithin AG",
    rollNo:"1DS18CS081",
    email:"nithinag10@gmail.com",
    daa:10,
    dbms:9,
    fmc:9,
    mp:10,
    atfl:9,
    os:10,
    daaLab:8,
    dbmsLab:10,
    kannada:9
});
student1.save().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
 student1 = new Result({
    name:"Manoj Sagar",
    rollNo:"1DS18CS066",
    email:"manojsagar066@gmail.com",
    daa:10,
    dbms:9,
    fmc:9,
    mp:10,
    atfl:9,
    os:10,
    daaLab:8,
    dbmsLab:10,
    kannada:9
});
student1.save().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
student1 = new Result({
    name:"Krutharth MR",
    rollNo:"1DS18CS169",
    email:"krutarthrajalbandi@gmail.com",
    daa:10,
    dbms:9,
    fmc:9,
    mp:10,
    atfl:9,
    os:10,
    daaLab:8,
    dbmsLab:10,
    kannada:9
});
student1.save().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});