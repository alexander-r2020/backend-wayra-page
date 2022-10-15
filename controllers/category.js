const Categoria = require('../models/categoria');
const Producto = require('../models/producto');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require("../constants/httpResponses");

class CategoryController{
    static async getAllCategory(req,res){
        const { name }=req.query;
        let category;
        if(name){
            let category;
            let producto;
            try{
               category = await Categoria.findOne({name:name})
               if(category){
                    producto = await Producto.find({categoria:category._id})
               }
            } catch(e){
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
                });
            }
            return res.status(httpStatus.OK).json({
                id:category._id,
                nombre:category.nombre,
                name:category.name,
                producto
                
            });
            }
        
        try{
            category= await Categoria.find()
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
              });
        }
        return res.status(httpStatus.OK).json({
            category,
          });
           
    }
    
}

module.exports = CategoryController;
