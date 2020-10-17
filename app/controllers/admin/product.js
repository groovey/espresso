const path = require('path')
const Product = require('@app/models').Product

const controller = {
  // Display a listing of the resource.
  index: (req, res) => {
    Product.all()
      .then(([datas]) => {
        res.render(controller.view('index'), {
          products: datas
        })
      })
      .catch(console.log)
  },

  // Show the form for creating a new resource.
  create: (req, res) => {
    res.render(controller.view('entry'), {
      title: 'Product Add',
      action: '/admin/products',
      method: 'POST',
      submit: 'Save',
      product: []
    })
  },

  // Store a newly created resource in storage.
  store: (req, res) => {
    const data = {
      name: req.body.name,
      price: req.body.price
    }

    Product.save(data)
    res.redirect('/admin/products')
  },

  // Display the specified resource.
  show: (req, res) => {
    const id = req.params.id

    Product.find(id)
      .then(([data]) => {
        res.render(controller.view('show'), {
          product: data[0]
        })
      })
      .catch(console.log)
  },

  // Show the form for editing the specified resource.
  edit: (req, res) => {
    const id = req.params.id
    Product.find(id)
      .then(([data]) => {
        res.render(controller.view('entry'), {
          title: 'Product Edit',
          action: '/admin/products/' + id,
          method: 'PUT',
          submit: 'Update',
          product: data[0]
        })
      })
      .catch(console.log)
  },

  // Update the specified resource in storage.
  update: (req, res) => {
    const id = req.params.id
    const data = {
      name: req.body.name,
      price: req.body.price
    }

    Product.update(data, id)

    res.redirect('/admin/products')
  },

  // Remove the specified resource from storage.
  destroy: (req, res) => {
    const id = req.params.id
    Product.delete(id)
    res.redirect('/admin/products')
  },

  view (view) {
    return path.join(RESOURCES_PATH, 'views', 'admin', 'products', view)
  }
}

module.exports = controller
