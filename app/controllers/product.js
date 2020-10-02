let product = {
    data() {
        return {
            name: 'Product 1'
        };
    },
    index: function (req, res) {
        res.send(product.data());
        product.custom();
    },
    create: (req, res) => {
        let form = `<form action="/admin/products" method="post" >
                <input type="text" name="name">
                <input type="submit" value="Add Product">
            </form>`;
        res.send(form);
    },
    store: (req, res) => {
        let body = req.body;
        let name = req.body.name;
        console.log(body);
        console.log(name);
        res.redirect('/admin/products');
    },
    show: (req, res) => {
        let id = req.params.id;
        res.send('Show the product id = ' + id);
    },
    edit: (req, res) => {
        let id = req.params.id;
        res.send('Edit the product id = ' + id);
    },
    update: (req, res) => {
        let id = req.params.id;
        res.send('Update the product id = ' + id);
    },
    destroy: (req, res) => {
        let id = req.params.id;
        res.send('Delete the product id = ' + id);
    },
    custom() {
        console.log('this is a custom function');
    },
};

module.exports = product;