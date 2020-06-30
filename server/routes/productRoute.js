// server/routes/Productroute.js
const express = require('express');
const productRouter = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController');
const extractFile = require('../middleware/file');


productRouter.post('/add', extractFile, productController.createProduct);
productRouter.get('/', productController.productRead);
productRouter.get('/add-to-cart/:id', productController.readCart);

module.exports = productRouter;
