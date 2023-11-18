const {Router}=require('express')
const {postProduct, getAllProducts,editProduct} = require('../controllers/product.controller')

const router=Router()

router.post('/api/product',postProduct)
router.get('/api/products',getAllProducts)
router.put('/api/product/:id', editProduct)

module.exports=router
