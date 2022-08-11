const { Schema, model}= require('mongoose');

const ProductoSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre del producto es obligatorio'],
        unique:true
    },
    estado:{
        type:Boolean,
        default: true,
        required:true
    },
    precio:{
        type: Number,
        default:0,
    },
    img:{
        type:String
    },
    descripcion:{
        type:String,
        required:[true,"almeos debe tener una descripcion"]
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref:'Categoria',
        required:true
    }

});

ProductoSchema.methods.toJSON = function(){
    const { __v, estado, ...data} = this.toObject();
    return data;
}

module.exports = model( 'Producto', ProductoSchema );