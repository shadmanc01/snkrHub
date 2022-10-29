const getSneaker =  async (req, res) => {
    sneaks.getProducts(req.params.search, 1, function (err, products) {
        if (products !== null) {
            res.send(products);
        }     
        if (products === null) {
            console.log(products);
        }
    })
}