const { Router }=require('express');
const CategoryController = require('../controllers/category')

const router = Router();

router.get('/',CategoryController.getAllCategory);



module.exports=router;