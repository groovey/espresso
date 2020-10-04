const path = require('path');
const Product = require('../models').Product;
const pathinfo = require('../helpers').pathinfo;

let controller = {
    // Display a listing of the resource.
    index: function (req, res) {
        Product.all()
            .then(([datas]) => {
                res.status(200).render(controller.view('index'), {
                    products: datas
                });
            })
            .catch(console.log);
    },

    // Show the form for creating a new resource.
    create: (req, res) => {
        res.render(controller.view('entry'));
    },

    // Store a newly created resource in storage.
    store: (req, res) => {
        let body = req.body;
        let name = req.body.name;
        let product = new Product(name);
        product.save();

        console.log(body);
        console.log(name);
        res.redirect('/admin/products');
    },

    // Display the specified resource.
    show: (req, res) => {
        let id = req.params.id;
        res.send('Show the product id = ' + id);
    },

    // Show the form for editing the specified resource.
    edit: (req, res) => {
        let id = req.params.id;
        res.send('Edit the product id = ' + id);
    },

    // Update the specified resource in storage.
    update: (req, res) => {
        let id = req.params.id;
        res.send('Update the product id = ' + id);
    },

    // Remove the specified resource from storage.    
    destroy: (req, res) => {
        let id = req.params.id;
        res.send('Delete the product id = ' + id);
    },

    view(view) {
        return path.join(pathinfo.resources('views'), 'admin', 'products', view);
    },
};

module.exports = controller;