const mongoose = require("mongoose");
const Result = require("./modules/result");
const results = require("./modules/result");
const uri = "mongodb+srv://RFIDpayments:Ff6RfZyRN5arkgvz@payments-ukurt.mongodb.net/test?retryWrites=true&w=majority";
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("CONNECTION OPEN!!!");
}).catch((err)=>{
    console.log(err);
})

let student1;
let usn;
let names = ["Pravin Tambe","Rohith Singh","Himesh Raghav","Nikhil Saheb","Ravi Kishan","Aakash Kumar","Ankit Tiwary","Ramesh Powar","Navin Kumar","Harish Kumar"];
for(let i = 0;i<=9;i++){
    usn = "1DS18CS00" + `${i}`
    student1 = new Result({
        name:names[i],
        rollNo:usn,
        sgpa:getRndInteger(7,10),
        daa:getRndInteger(7,10),
        dbms:getRndInteger(7,10),
        fmc:getRndInteger(7,10),
        mp:getRndInteger(7,10),
        atfl:getRndInteger(7,10),
        os:getRndInteger(7,10),
        daaLab:getRndInteger(7,10),
        dbmsLab:getRndInteger(7,10),
        kannada:getRndInteger(7,10)
    });
    student1.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}

console.log(getRndInteger(7,10))