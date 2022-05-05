
const {response , request} = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const usuarioGet = (req , res = response) => {

    // switch(langpost) {
    //     case 'ES':
    //         saludo = "Hola";
    //         break;
    //     case 'EN':
    //         saludo = "Hello"
    //         break;
    //     case 'FR':
    //         saludo = "Salut"
    //         break;
    //     default:
    //         saludo = "Holi"

            
    // }
    res.status(200).json({  
     
    });
    
}



const usuarioPost = async (req=request , res=response) => {
    
    const {name, correo, password, rol } = req.body
    const usuario = new Usuario({name, correo, password, rol});
    
    // Verificar correo

    //Emcriptar constraseña
    const salt = bcryptjs.getSalt()

    //Guardar en BD
    await usuario.save();
    res.status(202).json({
       usuario
    });   
}


//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO

module.exports = {  //Exportar todos y cada uno de los controladores
    usuarioGet,

    usuarioPost,

}