const express = require('express');
const app = express();
const port = 3001; 
const cors = require('cors');
const authenRouter = require('./routes/authentication.js');
// middleware
app.use(express.json());
app.use(cors());

app.use('/authentication', authenRouter);
// app.use('/wishlist', petRouter);
// app.use('/collection');

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})
