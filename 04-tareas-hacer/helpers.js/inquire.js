const inquirer = require('inquirer');
const color = require('colors');
const Choices = require('inquirer/lib/objects/choices');

const questions = [
    {
        type: 'list',
        name: 'Option',
        message:"¿Que deseas hacer?",
        choices: [
            {
                value:'1',
                name: '1.Crear tarea'
            },
            {
                value:'2',
                name:  '2.Listar Tarea'
            },
            {
                value:'3',
                name: '3.Listar tareas completadas' 
            },
            {
                value:'4',
                name: '4.Listar tareas pendientes'
            },
            {
                value:'5',
                name: '5.Completar tarea'
            },
            {
                value:'6',
                name: '6.Borrar Tarea'
            },
            {
                value:'0',
                name: '0.SALIR'
            }
               
        ]

    }
]


const inquirerMenu = async () => {

    console.clear()
    console.log('=============================='.green);
    console.log('   SELECCIONE UNA OPCIÓN  '.green);
    console.log('==============================\n'.green);
    
    const {Option} = await inquirer.prompt(questions);
    return Option;

}

const inquirePause = async () => {
    const pregu = [{
        type: 'input',
        name: 'enter',
        message: `Precione ${'ENTER'.green} para continuar\n`,

    }]
    await inquirer.prompt(pregu)

}

module.exports = {
    inquirerMenu,
    inquirePause
}