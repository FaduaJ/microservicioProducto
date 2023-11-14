const {Router}=require('express')
const {postSupplier, getAllSuppliers} = require('../controllers/supplier.controller')

const router=Router()

router.post('/api/supplier',postSupplier)
router.get('/api/suppliers',getAllSuppliers)

module.exports=router