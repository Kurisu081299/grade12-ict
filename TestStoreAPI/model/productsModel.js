const dbConn = require("../config/db.config");
const productsModel = {};  // Renaming to match the plural form

// Get all products
productsModel.getProducts = (callback) => {
    dbConn.query("SELECT * FROM products_table_3", (error, result) => {
        if (error) {
            console.error("Error getting Products. Data: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Insert a new product
productsModel.postProducts = (data, callback) => {
    dbConn.query("INSERT INTO products_table_3 (name, description, price, stock, category) VALUES (?, ?, ?, ?, ?)", 
    [data.name, data.description, data.price, data.stock, data.category], 
    (error, result) => {
        if (error) {
            console.error("Error inserting product.", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Update product details
productsModel.updateProducts = (product_id, data, callback) => {
    dbConn.query(
        "UPDATE products_table_3 SET name=?, description=?, price=?, stock=?, category=? WHERE product_id=?",
        [data.name, data.description, data.price, data.stock, data.category, product_id],
        (error, result) => {
            if (error) {
                console.error("Error updating product data: ", error);
                return callback(error, null);
            }
            return callback(null, result);
        }
    );
};

// Delete a product
productsModel.deleteProducts = (idsToDelete, callback) => {
    const query = "DELETE FROM products_table_3 WHERE product_id = ?";
    
    dbConn.query(query, [idsToDelete], (error, result) => {
        if (error) {
            console.error("Error deleting product: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

module.exports = productsModel;  // Exporting with plural name
