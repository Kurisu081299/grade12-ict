const express = require ('express');
const router = express.Router();
const userControllers = require('../controller/userController')

//list of routes
router.get("/students", userControllers.getData);
//http://localhost:5000/api/v1/user/students
router.post("/insertstudent", userControllers.postData);
router.put("/updatestudent", userControllers.putData);
router.delete("/deletestudent", userControllers.deleteData);
module.exports = router;