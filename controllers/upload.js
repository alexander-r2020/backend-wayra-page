const Producto = require('../models/producto');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require("../constants/httpResponses");
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)


class UploadController{

    static async updateUploads(req,res){
               
          const { id } = req.params
          let producto;

        try{
            producto = await Producto.findById(id)

            if(producto.img){
                const nombreArr = producto.img.split('/');
                const nombre = nombreArr[nombreArr.length-1];
                const [ public_id ] = nombre.split('.');
                cloudinary.uploader.destroy(public_id)
            }
            const { tempFilePath } = req.files.image
            const {secure_url} = await cloudinary.uploader.upload( tempFilePath )

            producto.img = secure_url
            await producto.save()

        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
              });
        }
        return res.status(httpStatus.OK).json({
            msg: "Product was updated successfully",
            producto
          });
        
    }
  
}

module.exports = UploadController;