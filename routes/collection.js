const express = require('express');
const router = express.Router();
const controllerColection = require("../controllers/collectionControllers.js");

router.get("/:id",controllerColection.getAllCollections)
router.post("/",controllerColection.postCollection)
router.delete("/",controllerColection.removeCollection)



module.exports = router;