
// server/routes/Productroute.js
const express = require('express');
const categoryRouter = express.Router();

const categoryController = require('../controllers/categoryController');



categoryRouter.post('/add', categoryController.createCat);


module.exports = categoryRouter;
