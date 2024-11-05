const orderModel = require('../model/orderModel');
const orderController = {};

// Get all orders
orderController.getOrders = (req, res) => {
    orderModel.getOrders((error, data) => {
        if (error) {
            return res.status(500).json({ message: "Error retrieving orders", error: error });
        }
        return res.status(200).json({ message: "Orders retrieved successfully", data: data });
    });
};

// Get a specific order by ID
orderController.getOrderById = (req, res) => {
    const { order_id } = req.params;
    orderModel.getOrderById(order_id, (error, data) => {
        if (error) {
            return res.status(500).json({ message: "Error retrieving order", error: error });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json({ message: "Order retrieved successfully", data: data });
    });
};

// Create a new order
orderController.createOrder = (req, res) => {
    const { customer_id, product_id, quantity, total_price, order_date, status } = req.body;

    if (!customer_id || !product_id || !quantity || !total_price || !order_date || !status) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const orderData = { customer_id, product_id, quantity, total_price, order_date, status };

    orderModel.createOrder(orderData, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "Error creating order", error: error });
        }
        return res.status(201).json({ message: "Order created successfully", data: result });
    });
};

// Update an order
orderController.updateOrder = (req, res) => {
    const { order_id } = req.params;
    const { customer_id, product_id, quantity, total_price, order_date, status } = req.body;

    if (!customer_id || !product_id || !quantity || !total_price || !order_date || !status) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    const orderData = { customer_id, product_id, quantity, total_price, order_date, status };

    orderModel.updateOrder(order_id, orderData, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "Error updating order", error: error });
        }
        return res.status(200).json({ message: "Order updated successfully", data: result });
    });
};

// Delete an order
orderController.deleteOrder = (req, res) => {
    const { order_id } = req.params;
    orderModel.deleteOrder(order_id, (error, result) => {
        if (error) {
            return res.status(500).json({ message: "Error deleting order", error: error });
        }
        return res.status(200).json({ message: "Order deleted successfully", data: result });
    });
};

module.exports = orderController;
