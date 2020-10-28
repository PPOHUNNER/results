const mongoose = require("mongoose");
const Result = require("./modules/result");
const results = require("./modules/result");
const uri = "mongodb+srv://RFIDpayments:Ff6RfZyRN5arkgvz@payments-ukurt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("CONNECTION OPEN!!!");
}).catch((err)=>{
    console.log(err);
})

let student1;
let usn;
let usns = [93,81,66]
let names = ["Prajwal Ponnana","Nithin AG","Manoj BB","Krutarth MR"];
for(let i = 0;i<=3;i++){
    usn = "1DS18CS" + `${usns[i]};`
    student1 = new Result({
        name:names[i],
        rollNo:usn,
        daa:10,
        dbms:9,
        fmc:9,
        mp:10,
        atfl:9,
        os:10,
        daaLab:8,
        dbmsLab:10,
        kannada:9,
        sgpa:9.3
    });
    student1.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}