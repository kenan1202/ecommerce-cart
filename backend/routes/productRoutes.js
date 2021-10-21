const { getProducts, getProduct } = require('../controllers/productControllers');
const express = require('express');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);

module.exports = router;