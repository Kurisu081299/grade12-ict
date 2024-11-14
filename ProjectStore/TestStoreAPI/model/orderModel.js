const dbConn = require('../config/db.config');
const orderModel = {};

// Create a new order
orderModel.createOrder = (data, callback) => {
    const query = "INSERT INTO orders_table (customer_id, product_id, quantity, total_price, order_date, status) VALUES (?, ?, ?, ?, ?, ?)";
    dbConn.query(query, [data.customer_id, data.product_id, data.quantity, data.total_price, data.order_date, data.status], (error, result) => {
        if (error) {
            console.error("Error inserting order: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Get all orders
orderModel.getOrders = (callback) => {
    const query = "SELECT * FROM orders_table";
    dbConn.query(query, (error, result) => {
        if (error) {
            console.error("Error retrieving orders: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Get a specific order by ID
orderModel.getOrderById = (order_id, callback) => {
    const query = "SELECT * FROM orders_table WHERE order_id = ?";
    dbConn.query(query, [order_id], (error, result) => {
        if (error) {
            console.error("Error retrieving order: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Update an order
orderModel.updateOrder = (order_id, data, callback) => {
    const query = "UPDATE orders_table SET customer_id = ?, product_id = ?, quantity = ?, total_price = ?, order_date = ?, status = ? WHERE order_id = ?";
    dbConn.query(query, [data.customer_id, data.product_id, data.quantity, data.total_price, data.order_date, data.status, order_id], (error, result) => {
        if (error) {
            console.error("Error updating order: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

// Delete an order
orderModel.deleteOrder = (order_id, callback) => {
    const query = "DELETE FROM orders_table WHERE order_id = ?";
    dbConn.query(query, [order_id], (error, result) => {
        if (error) {
            console.error("Error deleting order: ", error);
            return callback(error, null);
        }
        return callback(null, result);
    });
};

module.exports = orderModel;
