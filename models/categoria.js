const { Schema, model }= require('mongoose');

const CategoriaSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre de la categoria es obligatorio'],
        unique:true
    },
    img:{
        type:String
    },
    name:{
        type:String,
        required:[true,'El nombre general es obligatorio'],    }

});

CategoriaSchema.methods.toJSON = function(){
    const { __v, ...data} = this.toObject();
    return data;
}
module.exports = model( 'Categoria', CategoriaSchema );