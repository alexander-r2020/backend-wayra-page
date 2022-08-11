const { v4: uuidv4 } = require('uuid');

const uploadFile = ( file ,validateExtension = ['png','jpg','jpeg'] )=>{
    return new Promise( (resolve,reject ) =>{

        const { image } = file
        const name = image.name.split('.');
        const extension = name[name.length-1];

        //validar extension
        if(!validateExtension.includes(extension)){
            return reject('la extension no es permitida')
        }

        const nameTemp=uuidv4() + '.' + extension;
        
    })
}

module.exports = {
    uploadFile
}