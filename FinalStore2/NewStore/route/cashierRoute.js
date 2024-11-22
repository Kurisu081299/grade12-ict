const express = require ('express');
const router = express.Router();
const cashierController = require('../controller/cashierController');

// list of routes
router.get("/all", cashierController.getCashier);
router.post("/addcashier", cashierController.postCashier);
router.put("/updatecashier/:id", cashierController.putCashier);
router.delete("/deletecashier", cashierController.deleteCashier);

module.exports = router;