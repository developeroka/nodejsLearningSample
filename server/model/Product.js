const db = require('./db');

const productSchema = db.Schema({
        productPic: String,
        productName: String,  
        productPrice: String,
        productCategories: [String]
});

const Product = db.model('Product', productSchema);

module.exports = Product;