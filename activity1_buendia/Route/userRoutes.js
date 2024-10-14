const express = require ('express');
const router = express.Router();
const userControllers = require('../Controller/userController');

//List of Routes
router.get("/products", userControllers.getProducts);
router.post("/products/insert", userControllers.postProducts);
router.put("/products/update", userControllers.putProducts);
router.delete("/products/delete", userControllers.deleteProducts);

router.get("/stores", userControllers.getStores);
router.post("/stores/insert", userControllers.postStores);
router.put("/stores/update", userControllers.putStores);
router.delete("/stores/delete", userControllers.deleteStores);


module.exports = router;