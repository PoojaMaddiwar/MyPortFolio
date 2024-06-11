

const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const PortFolio = new MongoClient("mongodb+srv://admin:admin@cluster0.xiwcfcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// get request
app.get("/education",async(req,res)=>{
    await PortFolio.connect();
    let arr1 = await PortFolio.db("my_portfolio").collection("education").find().toArray();
    res.json(arr1);
})

app.get("/xyz",async(req,res)=>{
    await PortFolio.connect();
    let arr2 = await PortFolio.db("my_portfolio").collection("experience").find().toArray();
    res.json(arr2);
})


app.listen(8080,()=>{
    console.log("server listening on port on 8080")
})