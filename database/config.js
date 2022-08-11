const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology:true,
        })
        console.log("base de dato online");
    }catch(error){
        throw new Error('error de conexion a la base de datos')
    }
}

module.exports = {
    dbConnection
}