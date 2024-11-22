const db = require('../config/db.config'); 

const Product = function(product) {
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    this.description = product.description;
};

// Get all products
Product.findAll = (result) => {
    db.query('SELECT * FROM products', (err, res) => {
        if (err) {
            console.log('Error fetching products:', err);
            result(err, null);
        } else {
            console.log('Products fetched successfully');
            result(null, res);
        }
    });
};

// Get product by ID
Product.findById = (productId, result) => {
    db.query('SELECT * FROM products WHERE id = ?', [productId], (err, res) => {
        if (err) {
            console.log('Error fetching product:', err);
            result(err, null);
        } else {
            if (res.length) {
                console.log('Product found:', res[0]);
                result(null, res[0]);
            } else {
                result({ kind: 'not_found' }, null);
            }
        }
    });
};

// Create new product
Product.create = (newProduct, result) => {
    db.query('INSERT INTO products SET ?', newProduct, (err, res) => {
        if (err) {
            console.log('Error creating product:', err);
            result(err, null);
        } else {
            console.log('Product created successfully');
            result(null, res.insertId);
        }
    });
};

// Update product
Product.update = (productId, product, result) => {
    db.query('UPDATE products SET name = ?, price = ?, quantity = ?, description = ? WHERE id = ?',
    [product.name, product.price, product.quantity, product.description, productId], (err, res) => {
        if (err) {
            console.log('Error updating product:', err);
            result(err, null);
        } else {
            if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
            } else {
                console.log('Product updated successfully');
                result(null, res);
            }
        }
    });
};

// Delete product
Product.delete = (productId, result) => {
    db.query('DELETE FROM products WHERE id = ?', [productId], (err, res) => {
        if (err) {
            console.log('Error deleting product:', err);
            result(err, null);
        } else {
            if (res.affectedRows == 0) {
                result({ kind: 'not_found' }, null);
            } else {
                console.log('Product deleted successfully');
                result(null, res);
            }
        }
    });
};

module.exports = Product;
