const { Router }=require('express');
const ProductController = require('../controllers/product')
const { check } = require('express-validator');
const Validator = require('../middlewares/validar-campos')
const CheckRoleId = require('../middlewares/checkRole')

const router = Router();

router.get('/',ProductController.getAllProduct);
router.get('/:id',[
    check('id','No es un id valido de mongo').isMongoId(),
    Validator.validateFields
],ProductController.getProductId)
router.post('/',[
    CheckRoleId.isAdmin,
    check('nombre', "tiene que tener un nombre").notEmpty(),
    check('precio', "tiene que tener un precio").notEmpty(),
    check('descripcion', "tiene que tener una descripcion").notEmpty(),
    check('categoria', "no es un id de mongo").isMongoId(),
    Validator.validateFields
],ProductController.createProduct);
router.put('/:id',[
    CheckRoleId.isAdmin,
    check('id','No es un id valido de mongo').isMongoId(),
    check('categoria', "no es un id de mongo").isMongoId(),
    Validator.validateFields
],ProductController.updateProduct);
router.delete('/:id',[
    CheckRoleId.isAdmin,
    check('id','No es un id valido de mongo').isMongoId(),
    Validator.validateFields
],ProductController.deleteProduct);



module.exports=router;