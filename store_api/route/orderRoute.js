const express = require ('express');
const router = express.Router();
const orderControllers = require('../controller/orderController');

// list of routes
router.get("/all", orderControllers.getOrders);
router.post("/purchase", orderControllers.postOrders);
router.put("/updatestatus", orderControllers.updateStatus);
// router.delete("/void", orderControllers.deleteOrders);

module.exports = router;