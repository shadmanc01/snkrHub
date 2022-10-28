const express = require('express');
const router = express.Router();
const wishlistControllers = require("../controllers/wishListControllers.js")

router.get("/:id",wishlistControllers.getAllWishList);
router.post("/",wishlistControllers.addWishList);
router.delete("/",wishlistControllers.removeWishList);
router.post("/add_to_collection",wishlistControllers.wishlistToCollection);



module.exports = router;