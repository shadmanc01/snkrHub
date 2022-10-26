const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors')
// middleware
app.use(express.json());
app.use(cors());

app.use('/athentification', ownerRouter);
app.use('/wishlist', petRouter);
app.use('/collection')

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})
