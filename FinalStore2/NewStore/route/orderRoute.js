const express = require('express');
const router = express.Router();
const OrderController = require('./orderController');

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

module.exports = router;
