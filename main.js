const express = require("express");
const cors = require("cors");
const sql = require("./Model/db");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.send("<h1>this is a resterant API</h1>");
})

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:"+ PORT);
})

const restaurantRouter = require('./routes/restaurant.router')
app.use(restaurantRouter)