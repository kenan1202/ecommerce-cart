const express = require('express');
const connectDb = require('./db');
const router = require('./routes/productRoutes');
require('dotenv').config();


connectDb();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Api running'});
});


app.use('/api/products', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
