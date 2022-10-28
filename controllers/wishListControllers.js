const wishListModels = require("../models/wishListModels.js");

const getAllWishList = async (req,res) => {
    const id = req.params.id
    console.log(id)
    const data = await wishListModels.getWishList(id);
    console.log(data)
    return data ? res.status(200).send(data) : res.sendStatus(404);
}

const addWishList = async (req,res) => {
    const {sneakerName,id} = req.body;
    const postData = await wishListModels.addToWishList(sneakerName,id);
    return postData ? res.status(201).send(postData) : res.sendStatus(404);
}


const removeWishList = async (req,res) => {
    const {sneakerName,id} = req.body;
    const dataRemove = await wishListModels.deleteWishlist(sneakerName,id);
    return dataRemove ? res.status(201).send(dataRemove) : res.sendStatus(404);
}

const wishlistToCollection = async (req,res) => {
    const {sneakerName,id} = req.body;
    const data = await wishListModels.addFromWishListToCollection(sneakerName,id)
    return data ? res.status(201).send(data) : res.sendStatus(404);
}

module.exports = {
    getAllWishList,
    addWishList,
    removeWishList,
    wishlistToCollection
}