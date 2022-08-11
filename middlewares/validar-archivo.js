
const  httpStatus =require('../helpers/httpStatus')

class ValidatorImg {

    static validateFile(req, res, next) {
  
        if (!req.files || Object.keys(req.files).length === 0 || !req.files.image) {
            return res.status(httpStatus.BAD_REQUEST).json({
                msg:"No files were uploaded."
              });
          }
  
      next();
    };
  }
  
  module.exports = ValidatorImg;