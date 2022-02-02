const { resolve } = require('path');

require('colors');
const mostrarMenu = () => {


    return new Promise ((resolve) => {
        console.clear();
        console.log('=============================='.green);
        console.log('   SELECCIONE UNA OPCIÓN  '.green);
        console.log('==============================\n'.green);
     
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} listar tarea`);
        console.log(`${'3.'.green} listar tareas completadas`);
        console.log(`${'4.'.green} listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} SALIR\n`);
    
        //Preparar interfaz para recibir mensajes 
        const readline = require('readline').createInterface({
            input: process.stdin, //Aqui sabe node que va a tener que parar la ejecución y esperar una respuesta como lo son unos caracteres y el enter
            output: process.stdout //para mostrarle un mensaje
        });
    
        readline.question('Seleccione una opción: ' , (opt) => { //Aqui genero un mensaje para el input y recibo la respuesta por medio de un callback
            readline.close();
            resolve(opt)
        })

    })



}

const pausa = () =>{

    return new Promise((resolve) => {
        
        const readline = require('readline').createInterface({
            input: process.stdin, //Aqui sabe node que va a tener que parar la ejecución y esperar una respuesta como lo son unos caracteres y el enter
            output: process.stdout //para mostrarle un mensaje
        });
    
        readline.question(`Precione ${'ENTER'.green} para continuar\n` , (opt) => { //Aqui genero un mensaje para el input y recibo la respuesta por medio de un callback
            readline.close();
            resolve();
        })


    })
}

module.exports = {
    mostrarMenu,
    pausa
}