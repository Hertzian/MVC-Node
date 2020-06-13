const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);// title is for the input in view
    product.save();
    res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
    const products = Product.fetchAll();
    
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        productCSS: true,
        activeShop: true,
    });
}