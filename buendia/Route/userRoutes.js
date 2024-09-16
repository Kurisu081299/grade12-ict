const express = require ('express');
const router = express.Router();
const userControllers = require('../Controller/userController');

//List of Routes
router.get("/student", userControllers.getData);
router.post("/student/insert", userControllers.postData);
router.put("/student/update", userControllers.putData);
router.delete("/student/delete", userControllers.deleteData);


module.exports = router;