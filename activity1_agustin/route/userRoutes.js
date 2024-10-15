const express = require ('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// list of routes
router.get("/all", userControllers.getData);
router.post("/adduser", userControllers.postData);
router.put("/updateuser", userControllers.putData);
router.delete("/deleteuser", userControllers.deleteData);

module.exports = router;