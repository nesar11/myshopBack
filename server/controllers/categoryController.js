const express = require('express');
const app = express();
const Category = require('../models/category');



  exports.createCat = function(req, res) {
      console.log(category);
  let category = new Category(req.boy);
  category.save()
  .then(category => {
      res.status(200).json({'Category': 'Category has been created successfully'})
  })
  .catch(err => {
   console.log(err)

  })


  };