const jwt = require('jsonwebtoken')

class generateToken{

    // genera el token y con los datos del usuario
    static tokenSign(user){
        return jwt.sign(
            {
                id:user._id,
                role:user.rol
            },
            process.env.SECRET_KEY,
            {
            expiresIn:"1h"
            }
        )
    }
    static async verifyToken(token){
        try{
            return jwt.verify(token,process.env.SECRET_KEY)
        } catch(e){
            return null
        }
    
    }
}


module.exports=generateToken