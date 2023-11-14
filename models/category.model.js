const {model,Schema}=require('mongoose')
const categorySchema = Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=model('Category',categorySchema)