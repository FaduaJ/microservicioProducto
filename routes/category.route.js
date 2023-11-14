const {Router}=require('express')
const {postCategory, getAllCategories} = require('../controllers/category.controller')

const router=Router()

router.post('/api/category',postCategory)
router.get('/api/categories',getAllCategories)

module.exports=router