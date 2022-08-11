const { Router }=require('express');
const AuthController = require('../controllers/auth')
const { check } = require('express-validator');
const Validator = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    Validator.validateFields
    
],AuthController.loginUser);


module.exports=router;