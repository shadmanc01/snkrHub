const router = require("express").Router();
const { User, Sneaker } = require(`../models/`);
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();
const cors = require("cors");

//search
router.get("/search/:search", async (req, res) => {
    sneaks.getProducts(req.params.search, 20, function (err, products) {
        if (products !== null) {
        res.send(products);
        } 
        if (products === null) {
        console.log(products);
        }
    });
});