const {model,Schema}=require('mongoose')
const productSchema = Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:false
    },
    amount:{
        type:Number,
        required:true
    },
    minimum_amount:{
        type:Number,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    unit:{
        type:Number,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    supplier:{
        type:Schema.Types.ObjectId,
        ref:'Supplier',
        required:true
    }
})

module.exports=model('Product',productSchema)