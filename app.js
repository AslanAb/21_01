const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const phoneRouter = require("./routers/phoneRouter.js")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://Elya:elya@cluster0.qmgwgf9.mongodb.net/?retryWrites=true&w=majority", (err) => {
    if(err){
        console.log("ERROR", err);
    }else{
        console.log("server started");
        app.use("/phones", phoneRouter);
        app.listen(8080);
    }
});