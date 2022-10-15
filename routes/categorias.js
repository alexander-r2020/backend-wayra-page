const { Router }=require('express');
const { check } = require('express-validator');
const Validator = require('../middlewares/validar-campos')
const CategoryController = require('../controllers/category')

const router = Router();

router.get('/',CategoryController.getAllCategory);




module.exports=router;