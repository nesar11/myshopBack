const Product = require('../models/Product');
const express = require('express');
const app = express();
const multer = require('multer');
const Cart = require('../models/cart');
const mongoose = require('mongoose');


// const upload = multer({storage: storage, 
//     limits:{
//         fileSize: 1024 * 1024 * 5
//         }, 
//         fileFilter: fileFilter
//  });




// // localhost:3000/api2/product/add
// exports.CreateProduct = multer({ storage: storage }).single("image"),
//   (req, res, next) => {
//     const url = req.protocol + "://" + req.get("host");
//     const product = new Product({
//       ProductName: req.body.ProductName,
//       ProductDescription: req.body.ProductDescription,
//       ProductPrice: req.body.ProductPrice,
//       ProductImage: url + "/" + req.file.path
//     });
//     product.save().then(createdPost => {
//       console.log(product);
//       res.status(201).json({
//         message: "Post added successfully",
//         product: {
//           ...CreateProduct,
//           id: CreateProduct._id
//         }
//       });
//     });
//   };
    

  exports.createProduct = (req, res, next) => {
    console.log(req.file)
    const url = req.protocol + "://" + req.get("host");
    const product = new Product({
     
      Name: req.body.Name,
      Description: req.body.Description,
      Price: req.body.Price,
      productImage: url + "" + req.file.path
  });
  product.save()
  .then(product => {
      res.status(200).json({product});
      console.log(product);
  })
  .catch(err => {
      res.status(400).send(" Unable to save product in the database")
  });
  };
  

  exports.productRead =  (req, res) =>{
    Product.find( ( err, Products) =>{
        if(err){
            console.log(err);
        } else {
            res.json(Products);
            
        }
    });
};


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