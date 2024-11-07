const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

// Routes for order operations
router.get('/all', orderController.getOrders); 
router.get('/:order_id', orderController.getOrderById); 
router.post('/create', orderController.createOrder);
router.put('/update/:order_id', orderController.updateOrder); 
router.delete('/delete/:order_id', orderController.deleteOrder);

module.exports = router;
