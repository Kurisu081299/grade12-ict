const express = require ('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// list of routes
router.get("/student", userControllers.getData);
// http://localhost:5000/api/v1/user/students

module.exports = router;