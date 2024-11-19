const express = require('express');
const router = express.Router(); 
const purchaseController = require('../controller/purchaseController'); 

// Routes for purchases 
router.get("/purchase", purchaseController.getPurchase);  
router.post("/purchase", purchaseController.postPurchase); 
router.put("/purchase/:id/status", purchaseController.putPurchase); 
router.delete("/purchase/:id", purchaseController.deletePurchase); 

module.exports = router;
