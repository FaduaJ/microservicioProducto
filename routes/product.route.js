const {Router}=require('express')
const {postProduct, getAllProducts,editProduct,getAllProductsCategory} = require('../controllers/product.controller')

const router=Router()

router.post('/api/product',postProduct)
router.get('/api/products',getAllProducts)
router.get('/api/products/category/:categoryId', getAllProductsCategory);
router.put('/api/product/:id', editProduct)

module.exports=router
