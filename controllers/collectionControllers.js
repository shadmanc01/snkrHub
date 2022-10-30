const collectionModels = require("../models/collectionModels.js");
const SneaksAPI = require('sneaks-api');
const { all } = require("../routes/authentication.js");
const sneaks = new SneaksAPI();

const postCollection = async (req,res) => {
    console.log(req.body);
    const {sneakerName,id} = req.body
    const postData = await collectionModels.addToCollection(sneakerName,id);
    return postData ? res.status(201).send(postData) : res.sendStatus(404);
}

const removeCollection = async (req,res) => {
    const {sneakerName,id} = req.body
    const dataRemove = await collectionModels.removeFromcollection(sneakerName,id);
    return dataRemove ? res.status(201).send(dataRemove) : res.sendStatus(404);
}
const getAllCollections = async (req,res) => {
    const id = req.params.id
    console.log(id)
    const data = await collectionModels.getCollections(id);
    console.log(data)
    return data ? res.status(200).send(data) : res.sendStatus(404);
}

module.exports = {
    getAllCollections,
    postCollection,
    removeCollection
}
