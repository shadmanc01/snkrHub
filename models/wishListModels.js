const pool = require("../db.js");

const addToWishList = (sneakerName,id) => {
    return pool.query("INSERT INTO user_wishlist(sneaker_name,user_id) VALUES($1,$2) RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})
}

const deleteWishlist = (sneakerName,id) => {
    return pool.query("DELETE FROM user_wishlist WHERE sneaker_name = $1 AND user_id = $2 RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})
}

const addFromWishListToCollection = async (sneakerName,id) => {
    console.log(sneakerName,id)

    await addToCollection(sneakerName,id);
    return pool.query("DELETE FROM user_wishlist WHERE sneaker_name = $1 AND user_id = $2 RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})
}

const getWishList = (id) => {
    return  pool.query("SELECT * FROM user_wishlist WHERE user_id = $1",[id]).then(result=> {return result.rows});
 }

const addToCollection = (sneakerName,id) => {
    return pool.query("INSERT INTO collections (sneaker_name,user_id) VALUES($1,$2) RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})
}

module.exports = {
    getWishList,
    addFromWishListToCollection,
    addToWishList,
    deleteWishlist,
    addToCollection
}
