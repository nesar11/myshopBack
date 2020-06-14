
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

// Define collection and schema for Product
var Product = new Schema({
    Name: {
        type: String
    },
    Description: {
        type: String
    },
    Price: {
        type: Number
    },
    productImage: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', Product);