const {response,request}=require('express')
const Category = require('../models/category.model')

const postCategory=async(req=request, res=response)=>{
   
    try {
        const {name}=req.body
        const category = new Category({name})
        await category.save()
        res.json({
            msg:'CATEGORIA CREADA',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al crear la categoria' });
    }    
}
const getAllCategories =async (req=request, res=response)=>{
    try {
        const categories = await Category.find()
        res.json({categories})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al obtener las categorias' });
    }
}

module.exports={postCategory,getAllCategories}