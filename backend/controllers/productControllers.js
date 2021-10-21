const Product = require('../models/Product');

const getProducts = async(req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    }
    catch(err) {
        console.log(err);
        res.json({ message: 'Error' });
    }
}

const getProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    }
    catch(err) {
        console.log(err);
        res.json({ message: 'Error' });
    }
}


module.exports = {
    getProducts,
    getProduct
};