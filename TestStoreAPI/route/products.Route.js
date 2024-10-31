const express = require ('express');
const router = express.Router();
const productsControllers = require('../controller/productsController');

// list of routes
router.get("/all", productsControllers.getData);
router.post("/addcashier", productsControllers.postData);
router.put("/updatecashier", productsControllers.putData);
router.delete("/deletecashier",productsControllers.deleteData);

module.exports = router;