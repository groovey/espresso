const mysql = require('@app/services').mysql

const model = {

  all () {
    return mysql.connect().query('SELECT * FROM products')
  },

  find (id) {
    return mysql.connect().query('SELECT * FROM products WHERE id = ? LIMIT 1', [id])
  },

  save (data) {
    return mysql.connect().execute('INSERT INTO products (name, price) VALUES (?, ?)',
      [data.name, data.price]
    )
  },

  update (data, id) {
    return mysql.connect().execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
      [data.name, data.price, id]
    )
  },

  delete (id) {
    return mysql.connect().execute('DELETE FROM products WHERE id = ?',
      [id]
    )
  }

}

module.exports = model
