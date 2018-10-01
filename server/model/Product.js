const db = require('./db');

const productSchema = db.Schema({
        productPics: [String],
        productColors:[String],
        productDetails:String,
        productStyle:String,
        productMaterial:String,           
        productName: String,  
        productPrice: String,
        productSizeInfo:[{
                InfoName: String,
                InfoValue: String
        }],
        productCategory: [{
                type: db.Schema.Types.ObjectId,
                ref: "Category"
        }],
        ShareUrl: String
});

const Product = db.model('Product', productSchema);

module.exports = Product;