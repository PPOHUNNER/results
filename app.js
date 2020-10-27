const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Result = require("./modules/result");
const results = require("./modules/result");
const uri = "mongodb+srv://RFIDpayments:Ff6RfZyRN5arkgvz@payments-ukurt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("CONNECTION OPEN!!!");
}).catch((err)=>{
    console.log(err);
})

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


app.get("/results",(req,res)=>{
    res.render("result_form",{data:null});
});

app.post("/results",(req,res)=>{
    Result.findOne({rollNo:req.body.roll_no}).then((data)=>{
        if(data!= null)
        {
        res.render("result_form",{data:data});
        }
        else{
            res.render("result_form",{data:null});
        }
    }).catch((err)=>{
        console.log(typeof(err));
        res.render("result_form",{data:null});
    });
});

app.get("*",(req,res)=>{
    res.send("<h1>Wrong request</h1>");
})

app.listen(3000 || process.env.PORT,()=>{
    console.log("Server started at port 3000")
});