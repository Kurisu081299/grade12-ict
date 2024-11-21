const Product = require('../model/productModel');

exports.getAllProducts = (req, res) => {
    Product.findAll((err, products) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving products.'
            });
        } else {
            res.send(products);
        }
    });
};

exports.getProductById = (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            res.status(500).send({
                message: err.message || `Could not find product with ID ${req.params.productId}`
            });
        } else {
            res.send(product);
        }
    });
};

exports.createProduct = (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.quantity || !req.body.description) {
        res.status(400).send({
            message: 'Product details cannot be empty'
        });
    } else {
        const product = new Product(req.body);
        Product.create(product, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || 'Some error occurred while creating the product.'
                });
            } else {
                res.send({ id: data });
            }
        });
    }
};

exports.updateProduct = (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.quantity || !req.body.description) {
        res.status(400).send({
            message: 'Product details cannot be empty'
        });
    } else {
        Product.update(req.params.productId, req.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || `Error updating product with ID ${req.params.productId}`
                });
            } else {
                res.send({ message: 'Product updated successfully' });
            }
        });
    }
};

exports.deleteProduct = (req, res) => {
    Product.delete(req.params.productId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || `Could not delete product with ID ${req.params.productId}`
            });
        } else {
            res.send({ message: 'Product deleted successfully' });
        }
    });
};
