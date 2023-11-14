const {response,request}=require('express')
const Supplier = require('../models/supplier.model')

const postSupplier=async(req=request, res=response)=>{
   
    try {
        const {name,phone,mail}=req.body
        const supplier = new Supplier({name,phone,mail})
        await supplier.save()
        res.json({
            msg:'PROVEEDOR CREADO',
            supplier
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al crear el proveedor' });
    }    
}
const getAllSuppliers =async (req=request, res=response)=>{
    try {
        const suppliers = await Supplier.find()
        res.json({suppliers})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al obtener los proveedores' });
    }
}

module.exports={postSupplier,getAllSuppliers}