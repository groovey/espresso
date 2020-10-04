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
        res.render(controller.view('entry'), {
            title: 'Product Add',
            action: '/admin/products',
            method: 'POST',
            submit: 'Save',
            product: [],
        });
    },

    // Store a newly created resource in storage.
    store: (req, res) => {
        let product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.save();

        res.redirect('/admin/products');
    },

    // Display the specified resource.
    show: (req, res) => {
        let id = req.params.id;
        Product.find(id)
            .then(([data]) => {
                res.render(controller.view('show'), {
                    product: data[0]
                });
            })
            .catch(console.log);
    },

    // Show the form for editing the specified resource.
    edit: (req, res) => {
        let id = req.params.id;
        Product.find(id)
            .then(([data]) => {
                res.render(controller.view('entry'), {
                    title: 'Product Edit',
                    action: '/admin/products/' + id,
                    method: 'PUT',
                    submit: 'Update',
                    product: data[0]
                });
            })
            .catch(console.log);
    },

    // Update the specified resource in storage.
    update: (req, res) => {
        let product = Product.prototype;
        product.id = req.params.id;
        product.name = req.body.name;
        product.price = req.body.price;
        product.update();
        res.redirect('/admin/products');
    },

    // Remove the specified resource from storage.    
    destroy: (req, res) => {
        let product = Product.prototype;
        product.id = req.params.id;
        product.delete();
        res.redirect('/admin/products');
    },

    view(view) {
        return path.join(pathinfo.resources('views'), 'admin', 'products', view);
    },
};

module.exports = controller;