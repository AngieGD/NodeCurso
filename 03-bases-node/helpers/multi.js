const fs = require('fs');


const crearArchivo2 = async (base = 5) => {

try {
    console.log('========================')
    console.log(`     TABLA DEL ${base}`)
    console.log('========================')
    let salida = '';
    for(let i = 1 ; i <= 10 ; i++){
        
        salida += `${i} x ${base} = ${i*base} \n` 
    }
    fs.writeFile(`Tabla del ${base}.txt` , salida , (err) => {
        if (err) throw err;
        
    })
    return `Tabla del ${base}`
    
} catch (error) {
    throw error;
    
}




}

module.exports = {
    crearArchivo2
}

console.log(process.argv)    