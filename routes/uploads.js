const { Router }=require('express');
const UploadController = require('../controllers/upload')
const { check } = require('express-validator');
const Validator = require('../middlewares/validar-campos');
const ValidatorImg = require('../middlewares/validar-archivo');
const CheckRoleId = require('../middlewares/checkRole')

const router = Router();

router.put('/:id',[
    CheckRoleId.isAdmin,
    check('id','No es un id valido de mongo').isMongoId(),
    ValidatorImg.validateFile,
    Validator.validateFields
    
],UploadController.updateUploads);


module.exports=router;