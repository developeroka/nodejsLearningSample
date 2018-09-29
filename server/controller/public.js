const Category = require('../model/Category.js')
const Product = require('../model/Product.js')


let rController = {}

rController.index = function (req, res) {

    let proResult = [];
    let catResult = [];

    Promise.all([
        Category.find({}),
        Product.find({})
    ]).then(([categoryResult, productResult]) => {

        for (let cat of categoryResult) {
            catResult.push({
                typeName: cat.typeName
            })
        }

        for (let pro of productResult) {
            proResult.push({
                _id: pro._id,
                productPic: pro.productPic,
                productName: pro.productName,
                productPrice: pro.productPrice,
                productCategories: {
                    typeName: pro.category
                },
            })
        }
        res.render("index", {
            category: catResult,
            product: proResult
        })

    })


}

rController.insertCategory = function (req, res) {

    let category = new Category({
        typeName: "Laptop"
    })

    category.save().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json(err)
    })
}

rController.insertProduct = function (req, res) {

    let product = new Product({
        productPic: '../images/surface_z1.jpg',
        productName: "Surface Pro Z1",
        productPrice: "$3000",
        productCategories: ["laptop", "micosoft"]
    })

    product.save().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json(err)
    })
}

rController.productSingle = function (req, res) {

    Promise.all([
        Product.findById(req.params.id)
    ]).then(([productResult]) => {
        console.log(productResult)
        return res.render("productSingle", {
            product: productResult
        })
    })

}

rController.addToCart = function (req, res) {
   
}
module.exports = rController