const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.sendFile(
    //     path.join(rootDir, 'views','add-product.html')
    // );
    // ***** pug
    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCSS: true,
        activeAddProduct: true
    });
});// to add middlewares, next param is a function

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);// body is added by express
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;