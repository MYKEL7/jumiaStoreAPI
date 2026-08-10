const express = require('express');
const router = express.Router(); //

//import the product controller
const userController = require('../controllers/userController');

//define the routes
router.post('/createuser', userController.createUser);

router.put('/updateuser/:id', userController.updateUser);

//exprort the router to be used in other files
module.exports = router;