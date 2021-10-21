require('dotenv').config();

const connectDb = require('./db');
const products = require('./data/products');
const Product = require('./models/Product');

connectDb();

const storeData = async() => {
    try {
        await Product.insertMany(products);

        console.log('Data stored');

        process.exit();
    }
    catch(err) {
        console.log('Error', err);
        process.exit(1);
    }
}

storeData();