const express = require('express');
//import authentication middleware
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

//import authorization middleware
const { authorize } = require('../middleware/role');

const router = express.Router(); //

//import the product controller
const productController = require('../controllers/productController');

//define the routes
router.post('/createproduct', protect, productController.createProduct);
router.post('/createproductwithimage', protect, productController.createProductWithImage);
router.put('/updateproduct/:id', protect, authorize('user'), productController.updateProduct);
router.get('/getproductbyid/:id', protect, productController.getProductById);
router.get('/getallproducts', protect, productController.getAllProducts);

//export the router to be used in other files
module.exports = router;