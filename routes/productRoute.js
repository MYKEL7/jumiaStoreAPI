const express = require('express');
const router = express.Router(); //

//import the product controller
const productController = require('../controllers/productController');

//define the routes
router.post('/createproduct', productController.createProduct);

router.put('/updateproduct/:id', productController.updateProduct);

router.get('/getallproducts',  productController.getAllProducts);

//exprort the router to be used in other files
module.exports = router;