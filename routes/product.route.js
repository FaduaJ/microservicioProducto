const {Router}=require('express')
const {postProduct, getAllProducs,editProduct} = require('../controllers/product.controller')

const router=Router()

router.post('/api/product',postProduct)
router.get('/api/products',getAllProducs)
router.put('/api/product/:id', editProduct)

module.exports=router
