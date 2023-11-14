const {model,Schema}=require('mongoose')
const supplierSchema = Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:false
    }
})

module.exports=model('Supplier',supplierSchema)