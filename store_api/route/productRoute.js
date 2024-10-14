const express = require ('express');
const router = express.Router();
const productControllers = require('../controller/productController');

// list of routes
router.get("/all", productControllers.getProducts);
router.post("/addproduct", productControllers.postProducts);
router.put("/updateproduct", productControllers.putProducts);
router.delete("/deleteproduct", productControllers.deleteProducts);

module.exports = router;