const express = require ('express');
const router = express.Router();
const customerController = require('../controller/customerController');

// list of routes
router.get("/all", customerController.getCustomer);
router.post("/addcustomer", customerController.postCustomer);
router.put("/updatecustomer", customerController.putCustomer);
router.delete("/deletecustomer",customerController.deleteCustomer);

module.exports = router;