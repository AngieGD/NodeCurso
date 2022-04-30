require('colors');

const { inquirerMenu, inquirePause } = require('./helpers.js/inquire');


console.clear();
const main = async() => {
    //console.log('Holi')
    let opt = ''

    do{
        opt = await inquirerMenu();
        console.log({opt});

        await inquirePause();

    } while(opt !== '0')


}

main();
