
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

// Define collection and schema for Product
var Category = new Schema({
    // _id: Schema.Types.ObjectId,
 
    catName: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', Category);