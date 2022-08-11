const Validator = require('../helpers/db-validators');
const generateToken = require('../helpers/generateToken');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require('../constants/httpResponses')

class AuthController{
    static async loginUser(req,res){
        const { correo , password } = req.body
        try{
            const usuario = await Validator.validateUser(correo,password)
            if(!usuario){
                return res.status(httpStatus.BAD_REQUEST).json({
                msg: "User or password incorrect"
              });
            }
            const {_id,rol} = usuario.usuario
            const user={
                _id,
                rol
            }
            const token = generateToken.tokenSign(user)

            return res.status(httpStatus.OK).json({
                msg: "Login successfully",
                token
              });
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
              });
        }
        
    }
}

module.exports = AuthController