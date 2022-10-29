
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const port = 3001; 
const cors = require('cors');
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
const authenRouter = require('./routes/authentication.js');

const collectionRouter = require('./routes/collection.js');
const wishListRouter = require("./routes/wishList.js")

// middleware
app.use(express.json());
app.use(cors());

app.use('/authentication', authenRouter);
app.use('/wishlist', wishListRouter);
app.use('/collection', collectionRouter);


// middleware

app.get("/", (req, res) => {
    res.send("welcome");
})
app.get('/:sneakerName', async (req, res) => {
    await sneaks.getProducts(req.params.sneakerName, 1, function(err, products){
        res.status(200).json(products);
    })
})

// app.post('authentication/register', async (req,res)=>{

// const {username, password} = req.body
// const user = await pool.query(`INSERT INTO user (username, password) VALUES ($1, $2)`[username, password])
// res.status(200)

// })

// app.post('/authentication/login', async (req,res)=>{
//     const {username, password} = req.body
//     const user = await pool.query('SELECT * FROM user WHERE username = $1',[username])
//     .then(result => result.rows[0])
//     const login = bcrypt.compare(password, user.password)
//  if(login){
//    res.status(200).send(user)
// } else{
//     res.status(400).send('password is wrong')
// }
//     })
    


app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})