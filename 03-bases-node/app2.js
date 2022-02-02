const {crearArchivo2} = require('./helpers/multi')
const argv = require('yargs').argv;


console.clear();


/*
console.log(process.argv)    
const[ , , arg3 ] = process.argv
console.log(arg3)
const[, base = 5] = arg3.split('=')
console.log(base)

crearArchivo2(base)
    .then(nombreArchivo => console.log(nombreArchivo , 'creado'))
    .catch(error => console.error())
    */


//Los siguientes son los dos tipos de argv 
console.log(process.argv);
console.log(argv)
console.log(`base: yargs ${argv.base}`)