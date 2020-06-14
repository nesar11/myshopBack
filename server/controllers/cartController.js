


const express = require('express');
const app = express();
const Cart = require('../models/Cart');
const product = require('../routes/productRoute');
const mongoose = require('mongoose');

exports.readCart = (req, res, next) =>{
var productId = req.params._id;
var cart = new Cart(req.session.cart ? req.session.cart : {});
Product.findById(product._id, function(err, product){
  if(err){
    return res.redirect('/')
  }
  cart.add(product, productIdnesser);
  console.log(req.session.cart);
  req.session.cart = cart;
})
  };