const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs')


class Validator {

    static async validateUser(correo,password) {
      
      try{
         const usuario = await Usuario.findOne({correo});       
         const validPassword = bcryptjs.compareSync( password,usuario.password)
         if(!validPassword) return null
         return {
            usuario
         }
      }catch(e){
         return null
      }
       
    };
  }
  
  module.exports = Validator;