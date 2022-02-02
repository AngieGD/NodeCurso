

//Imprimir tabla
//Forma 1

/* const num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
num.forEach( elem => console.log(base,'x ',elem, ' = ',elem*base ))
 */




//Forma 2

/* let salida = '';
 for(let i = 1 ; i<=10 ; i++){
    salida +=  ` ${base}x ${i} = ${i * base} \n`   
 }; */

 /* fs.writeFile(  `tabla-${base}.txt'`,  salida  , (err) => {
         if (err) throw err;

         console.log('Archivo creado... :)')
 }); */

/*  fs.writeFileSync(  `tabla-${base}.txt'`,  salida );

 console.log('Archivo creado... :)') */;

//const { argv, option } = require('yargs');
 //const base = 7;
 const {crearArchivoTabla } = require('./helpers/multiplicar') //Desestructuración 
 const argv = require('yargs')
                .option('b' , {
                        alias:'base',
                        type: 'number',
                        demandOption: true
                })
                .option('l' , {
                        alias:'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false
                })                
                .check((argv , options) => {
                        if(isNaN(argv.b)){
                        throw 'la base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

 console.clear();
 console.log(process.argv); //para comandos en linea
 console.log( argv );
 console.log('base: yargs' , argv.base);
 
 
//console.log(base)
 

 crearArchivoTabla(argv.base)
  .then(salario => console.log(salario , 'creado'))
  .catch(error => console.log(error)); 



