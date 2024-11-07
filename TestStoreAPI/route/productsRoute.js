const express = require ('express');
const router = express.Router();
const productsController = require('../controller/productsController');

// list of routes
router.get("/all", productsController.getProducts);
router.post("/addproducts", productsController.postProducts);
router.put("/updateproducts", productsController.putProducts);
router.delete("/deleteproducts",productsController.deleteProducts);

module.exports = router;