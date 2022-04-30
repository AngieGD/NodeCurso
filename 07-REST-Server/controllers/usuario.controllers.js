
const {response , request} = require('express')

let namepost = '';
let idpost = 0;
let langpost = '';
let saludo = '';

const usuarioGet = (req , res = response) => {

    switch(langpost) {
        case 'ES':
            saludo = "Hola";
            break;
        case 'EN':
            saludo = "Hello"
            break;
        case 'FR':
            saludo = "Salut"
            break;
        default:
            saludo = "Holi"

            
    }
    res.status(200).json({  
        id: idpost,
        content: saludo + " "+ namepost+"!"
    });
    
}



const usuarioPost =  (req=request , res=response) => {
    
    const {id , name , lang} = req.query;
    namepost = name;
    idpost = id;
    langpost = lang;
     res.status(202).json({
         name,
         lang,
         id
         
     });   
}


//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO
//lA PRUEBA DE FUEGO

module.exports = {  //Exportar todos y cada uno de los controladores
    usuarioGet,

    usuarioPost,

}