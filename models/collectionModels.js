const pool = require("../db.js");

const getCollections = (id) => {
    return  pool.query("SELECT * FROM collections WHERE user_id = $1",[id]).then(result=> {return result.rows});
 }
const addToCollection = (sneakerName,id) => {
    return pool.query("INSERT INTO collections (sneaker_name,user_id) VALUES($1,$2) RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})

}

const removeFromcollection = (sneakerName,id) => {
    return pool.query("DELETE FROM collections WHERE sneaker_name = $1 AND user_id = $2 RETURNING *",[sneakerName,id]).then(result=> {return result.rows[0]})
}

module.exports = {
    getCollections,
    addToCollection,
    removeFromcollection
}