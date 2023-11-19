const {response,request}=require('express')
const Product= require('../models/product.model')


const postProduct=async(req=request, res=response)=>{
   
    try {
        const {name,brand,amount,minimum_amount, price, unit,categoryId,supplierId}=req.body
        const produc = new Product ({name,brand,amount,minimum_amount, price, unit,categoryId,supplierId})
        await produc.save()
        res.json({
            msg:'PRODUCTO CREADO',
            produc
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al crear el producto' });
    }
    
}
const getAllProducts =async (req=request, res=response)=>{
    try {
        const products = await Product.find()
        res.json({products})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al obtener los productos' });
    }
}

const getAllProductsCategory =async (req=request, res=response)=>{
    try {
        const categoryId = req.params.categoryId; 
        const productsInCategory = await Product.find({categoryId});
        console.log(productsInCategory)
        res.json({ products: productsInCategory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Hubo un error al obtener los productos por categoría' });
    }
}

const editProduct = async (req = request, res = response) => {
    try {
        const productId = req.params.id; 
        const { name, brand, amount, minimum_amount, price, unit,categoryId,supplierId} = req.body;
        
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, brand, amount, minimum_amount, price, unit,categoryId,supplierId},
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({
            msg: 'PRODUCTO ACTUALIZADO',
            product: updatedProduct,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Hubo un error al actualizar el producto' });
    }
};

module.exports={postProduct,getAllProducts,editProduct,getAllProductsCategory}