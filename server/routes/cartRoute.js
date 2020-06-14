// server/routes/Productroute.js
const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');


cartRouter.get('/add-to-cart/:id', cartController.readCart);



module.exports = cartRouter;
