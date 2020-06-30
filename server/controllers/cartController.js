


const express = require('express');
const app = express();
const Cart = require('../models/cart');
const Product = require('../models/Product');
// const Product = require('../routes/productRoute');
const mongoose = require('mongoose');

exports.readCart = (req, res, next) =>{
  var productId = req.params.id;
  console.log(productId)
  var cart = new Cart(req.session.cart ? req.session.cart : {items:{}})
  Product.findById(productId, function(err,product){
  console.log(product)
  console.log(product.id)
  if(err){
      return res.redirect('/')
  }
  cart.add(product, product.id)
  req.session.cart = cart;
  console.log(req.session.cart)
  res.redirect('/')
  })
  }