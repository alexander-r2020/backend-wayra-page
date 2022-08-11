const  Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs')

class UserController{
    static async getAllUser(req,res){

        const { limite = 5, desde = 0 }=req.query;
        const query = {estado:true};
        
        const [total,usuarios] = await Promise.all([
            Usuario.countDocuments(query),
            Usuario.find(query)
            .skip(+desde)
            .limit(+limite)
        ])
        
        res.json({
            total,
            usuarios
        })
    }
    static async createUser(req,res){

        const {nombre,correo,password,rol} = req.body
        const usuario = new Usuario( {nombre,correo,password,rol} );

        const salt = bcrypt.genSaltSync(10)
        usuario.password = bcrypt.hashSync( password, salt )

        //guarda en DB
        await usuario.save();

        res.json({
            usuario
        })

    }
    static async updateUser(req,res){
        const { id }=req.params;
        const {_id,password,google,correo, ...user}=req.body;

        if(password){
            const salt = bcrypt.genSaltSync(10)
            user.password = bcrypt.hashSync( password, salt );
        }
        const usuario = await Usuario.findByIdAndUpdate(id,user);

        res.json({
            usuario
        })
    }
    static async deleteUser(req,res){
        const {id}= req.params;
        const user = req.usuario

        const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})

        res.json({
            usuario,
            user
        })
    }
}

module.exports = UserController