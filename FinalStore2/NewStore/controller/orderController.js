const Order = require('./orderModel');

const getAllOrders = (req, res) => {
    const orders = Order.getAllOrders();
    res.json(orders);
};

const getOrderById = (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = Order.getOrderById(orderId);
    if (order) {
        res.json(order);
    } else {
        res.status(404).send('Order not found');
    }
};

const updateOrder = (req, res) => {
    const orderId = parseInt(req.params.id);
    const newDetails = req.body.details;
    const updatedOrder = Order.updateOrder(orderId, newDetails);
    if (updatedOrder) {
        res.json(updatedOrder);
    } else {
        res.status(404).send('Order not found');
    }
};

const deleteOrder = (req, res) => {
    const orderId = parseInt(req.params.id);
    const success = Order.deleteOrder(orderId);
    if (success) {
        res.send(`Order ID ${orderId} deleted`);
    } else {
        res.status(404).send('Order not found');
    }
};

module.exports = { getAllOrders, getOrderById, updateOrder, deleteOrder };
