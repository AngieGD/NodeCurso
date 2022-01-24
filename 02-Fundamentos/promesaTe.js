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
            : reject(`El empleado con id ${id} no existe`)
        
    })
}

const id = 3;

/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(error => console.log(error))


getSalario(id)    
        .then(salario => console.log(salario))
        .catch(err => console.log(err)) */

/* getEmpleado(id)
    .then( empleado => {
        getSalario(id)
            .then(salario => console.log(`El empleado ${empleado} tiene un salario de ${salario}`))
            .catch(err => console.log(err)) 
        })
    .catch(err => console.log(err))     */    
    
    //En lugar de lo anterior hacemos promesas en cadena ------!!!! 
let nombre;
getEmpleado(id)
        .then(empleado => {
            nombre = empleado;
            return getSalario(id)
        }) //Como retorna una promesa puedo concatenar otro then () que se dispara con el producto de getSalario
        .then(salario => console.log(`El empleado ${nombre} de salario ${salario}`))
        .catch(err =>console.log(err))

