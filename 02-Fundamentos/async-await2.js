const empleados =  [
    {
        id: 1,
        nombre:"Fernando"
    
    },
    {
        id: 2,
        nombre:"Maria"
    
    },
    {
        id: 3,
        nombre:"Paola"
    
    }

]

const salario =  [
    {
        id: 1,
        salario: 1100
    
    },
    {
        id: 2,
        salario:2000
    
    }

]

const getEmpleado = (id) => {  
    //Las promesas reciben como argumento un callback
    //El argumento resolve siempre que está bien se ejecuta y el reject se pone para validar errores
    //const promesa = new Promise( (resolve , reject) => {
    const promesa = new Promise( (resolve , reject) => {        
        const empleado = empleados.find(f => f.id === id)?.nombre
           

        if (empleado) {
            resolve(empleado)
        }else {
            reject(`El empleado con id ${id} no existe`)    
        }

    });
    return promesa;
}

const getSalario = (id) =>{
    return new Promise ((resolve , reject) => {
        const saldo = salario.find(s => s.id === id)?.salario;

        (saldo)
            ? resolve(saldo)
            : reject(`El empleado con id ${id} no existeee`)
        
    })
}

/**
 * 
 * @param {*} id 
 * @returns el id hacaverha
 */

//Aqui se crea una función asincrona
const getInfoUsuario = async (id) => {

    try {
        
        const empleado =  await getEmpleado(id) //await recibe una promesa 
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es de: ${salario}`

   }catch(error){
        throw error;
    } 

}

const id = 5

getInfoUsuario(id)
    .then(empleado => {
        console.log('Todo bien')
        return console.log(empleado)
    })
    .catch(error => {
        console.log('Todo mal bien')
        console.log( error)
    })