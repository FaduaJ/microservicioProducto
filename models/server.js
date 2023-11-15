const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.conecDB()
        this.middleware()
        this.router()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    async conecDB (){
        await dbConnection()
    }

    router(){
        this.app.use(require('../routes/category.route'))
        this.app.use(require('../routes/supplier.route'))
        this.app.use(require('../routes/product.route'))
    }
    start (){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en:',this.port)
        })
    }

}

module.exports = Server