const SneaksAPI = require('sneaks-api');
const express = require("express")
const app = express()
const cors = require("cors")
const sneaks = new SneaksAPI();

app.use(express.json())
app.use(cors)

//getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
sneaks.getProducts("Cloud White",1, function(err, products){
    console.log(products)
})


app.get("/", (req,res)=>{
    
})

