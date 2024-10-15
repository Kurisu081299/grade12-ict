const express = require ('express');
const router = express.Router();
const productController = require('../controller/productController');

// list of routes
router.get("/all",productController.getProduct);
router.post("/addproduct", productController.postProduct);
router.put("/updateproduct", productController.putProduct);
router.delete("/deleteproduct", productController.deleteProduct);

module.exports = router;