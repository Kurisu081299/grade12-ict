const dbConn = require('../config/db.config');

const productsController = {
    getProducts: (req, res) => {
        dbConn.query("SELECT * FROM products_table_3", (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Error fetching products', error });
            }
            return res.status(200).json(result);
        });
    },

    postProducts: (req, res) => {
        const { name, price, description, stock, category } = req.body;
        const query = "INSERT INTO products_table_3 (name, price, description, stock, category) VALUES (?, ?, ?, ?, ?)";
        dbConn.query(query, [name, price, description, stock, category], (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Error adding product', error });
            }
            return res.status(201).json({ message: 'Product added successfully', result });
        });
    },

    putProducts: (req, res) => {
        const { id, name, price, description, stock, category } = req.body;
        const query = "UPDATE products_table_3 SET name = ?, price = ?, description = ?, stock = ?, category = ? WHERE product_id = ?";
        dbConn.query(query, [name, price, description, stock, category, id], (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Error updating product', error });
            }
            return res.status(200).json({ message: 'Product updated successfully', result });
        });
    },

    deleteProducts: (req, res) => {
        const { id } = req.body;
        const query = "DELETE FROM products_table_3 WHERE product_id = ?";
        dbConn.query(query, [id], (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Error deleting product', error });
            }
            return res.status(200).json({ message: 'Product deleted successfully', result });
        });
    }
};

module.exports = productsController;
