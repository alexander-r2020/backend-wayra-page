const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.categoriaPath = '/api/category'
        this.productoPath = '/api/product'
        this.uploadPath = '/api/upload'
        this.authPath = '/api/auth'

        //conectar base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Rutas de aplicacion
        this.routes()

    }
    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }


    routes(){
        this.app.use(this.categoriaPath,require('../routes/categorias'));
        this.app.use(this.productoPath,require('../routes/productos'));
        this.app.use(this.uploadPath,require('../routes/uploads'));
        this.app.use(this.authPath,require('../routes/auth'));
        
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor corriendo", this.port);
        })
    }
} 

module.exports = Server;