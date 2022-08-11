const { Schema, model}= require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'la contraseña es obligatorio'],
        
    },
    rol:{
        type:String,
        required:true,
        emun:['admin','user']
    }
});

UsuarioSchema.methods.toJSON = function(){
    const {__v , password ,_id ,...user } = this.toObject();
    user.uid=_id
    return user
}

module.exports = model( 'Usuario', UsuarioSchema );