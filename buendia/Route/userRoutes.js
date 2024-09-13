const express = require ('express');
const router = express.Router();
const userControllers = require('../Controller/userController');

//List of Routes
router.get("/student", userControllers.getData);
router.post("/student/insert", userControllers.postData);

module.exports = router;