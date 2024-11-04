const express = require ('express');
const router = express.Router();
const customerControllers = require('../controller/customerController');

// list of routes
router.get("/all", customerControllers.getData);
router.post("/addcashier", customerControllers.postData);
router.put("/updatecashier", customerControllers.putData);
router.delete("/deletecashier",customerControllers.deleteData);

module.exports = router;