const fs = require('fs');
const path = require('path')
const localPath = require('../util/path');
const ruta = path.join(localPath, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(ruta, (err, fileContent) =>{
        console.log(ruta);
        if(err){
            callback([]);
        }else{
            callback(JSON.parse(fileContent));
            // console.log(JSON.parse(fileContent));
        }

    });
}

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(ruta, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });

        // fs.readFile(ruta, (err, fileContent) =>{
            // let products = [];
            // if(!err){
            //     products = JSON.parse(fileContent);
            // }

            // products.push(this);
            // fs.writeFile(ruta, JSON.stringify(products), (err) => {
            //     console.log(err);
            // });
        // });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }

}