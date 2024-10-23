const express = require ('express');
const router = express.Router();
const userControllers = require('../controller/userController')

//list of routes
router.get("/client", userControllers.getData);
//http://localhost:5000/api/v1/user/client
router.post("/insertclient", userControllers.postData);
router.put("/updateclient", userControllers.putData);
router.delete("/deleteclient", userControllers.deleteData);
module.exports = router;