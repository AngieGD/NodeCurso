
const {response , request} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuarioPut = async (req , res = response) => {
    const {id} = req.params;
    const { _id , password , google , ...resto} = req.body

    //TODO: Valida contra base de datos
    if(password) {
    //Encriptar constraseña
    const salt = bcryptjs.genSaltSync()
    resto.password = bcryptjs.hashSync(password , salt);
    }
    const usuarioedit = await Usuario.findByIdAndUpdate(id , resto);

    res.json({     
        usuarioedit       
    }) 
}

const usuarioGet = async(req = request , res = response) => {
    const {limite = 5, desde = 0} = req.query;
    const query = {estado:true};
    // const usuarios = await Usuario.find(query)
    //     .skip(desde)
    //     .limit(limite)
    // const total = await Usuario.countDocuments(query)

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(desde)
        .limit(limite)        
    ])
    res.status(200).json({   
        //respuesta
         total,
         usuarios

    });  
}

const usuarioPost = async (req=request , res=response) => {
    

    
    const {name, correo, password, rol } = req.body
    const usuario = new Usuario({name, correo, password, rol});

    //Encriptar constraseña
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password , salt)

    //Guardar en BD
    await usuario.save();
    res.status(202).json({
       usuario
    });   
}

const usuarioDelete = async(req=request , res=response) => {
    const {id} = req.params;
    //const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate(id , { estado:false })
    res.status(202).json({
        usuario        
    })

}


//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO

module.exports = {  //Exportar todos y cada uno de los controladores
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete

}