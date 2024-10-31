const express = require ('express');
const router = express.Router();
const cashierControllers = require('../controller/cashierController');

// list of routes
router.get("/all", cashierControllers.getData);
router.post("/addcashier", cashierControllers.postData);
router.put("/updatecashier",cashierControllers.putData);
router.delete("/deletecasheir", cashierControllers.deleteData);

module.exports = router;