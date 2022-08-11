const Categoria = require('../models/categoria');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require("../constants/httpResponses");

class CategoryController{
    static async getAllCategory(req,res){
        
        let category;
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
