require('colors');
const{mostrarMenu, pausa} = require('./helpers.js/mensajes')

console.clear();
const main = async() => {
    //console.log('Holi')
    let opt = ''

    do{
        opt = await mostrarMenu();
        console.log({opt});
        if (opt !== '0') await pausa();

    } while(opt !== '0')


}

main();
