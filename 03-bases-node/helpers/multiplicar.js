

const { rejects } = require('assert');
const fs = require('fs');

const crearArchivoTabla = async(base = 5) =>{
    //return new Promise ((resolve , reject) => {
        console.log('==================================');
        console.log(` TABLA DEL ${base}`        );
        console.log('==================================');
        let salida = '';
        for(let i = 1 ; i<=10 ; i++){
            salida +=  ` ${base}x ${i} = ${i * base} \n`   
        };
        console.log(salida)
       
     
            fs.writeFileSync(  `tabla-${base}.txt'`,  salida );
    
            return('Archivo creado... :)');
            
          
    //}
    

    




}


module.exports = {
    crearArchivoTabla
}