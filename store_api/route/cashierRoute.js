const express = require ('express');
const router = express.Router();
const cashierControllers = require('../controller/cashierController');

// list of routes
router.get("/all", cashierControllers.getCashier);
router.post("/addcashier", cashierControllers.postCashier);
router.put("/updatecashier", cashierControllers.putCashier);
router.delete("/deletecashier", cashierControllers.deleteCashier);

module.exports = router;