
const express = require('express');
const app = express();
const port = 3001; 
const cors = require('cors');
const authenRouter = require('./routes/authentication.js');
const collectionRouter = require('./routes/collection.js');
const wishListRouter = require("./routes/wishList.js")
// middleware
app.use(express.json());
app.use(cors());

app.use('/authentication', authenRouter);
app.use('/wishlist', wishListRouter);
app.use('/collection', collectionRouter);

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})

