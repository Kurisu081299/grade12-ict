const express = require('express');
const router = express.Router();
const purchaseControllers = require('../controller/purchaseController'); 


router.get("/orders", purchaseControllers.getOrders); 
router.post("/orders", purchaseControllers.postOrder); 
router.put("/orders/:id/status", purchaseControllers.updateOrderStatus); 
router.delete("/orders/:id", purchaseControllers.deleteOrder); 

module.exports = router;