// mongodb+srv://admin:<password>@cluster0.xiwcfcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();

const PortFolio = new MongoClient("mongodb+srv://admin:admin@cluster0.xiwcfcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


app.listen(8080,()=>{
    console.log("server listening on port on 8080")
})