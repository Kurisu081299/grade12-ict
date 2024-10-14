const express = require ('express');
const router = express.Router();
const customerControllers = require('../controller/customerController');

// list of routes
router.get("/all", customerControllers.getCustomer);
router.post("/addcustomer", customerControllers.postCustomer);
router.put("/updatecustomer", customerControllers.putCustomer);
router.delete("/deletecustomer", customerControllers.deleteCustomer);

module.exports = router;