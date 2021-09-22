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
//Se tranformó a promesa, lo de antes esta en el callbacks hell
const getInfor = ( id )=>{
    return  new Promise((resolve , reject) => { // 
        //Cuerpo de la promesa
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        ( empleado )
          ?  resolve(empleado)
          : reject('ERROR!! No existe')
        
                                                            //  El resolve siempre se ejecuta y el reject no es obligatorio de poner, es solo algo que 
                                                            //se ejecuta si se quiere tener cuidado con un error        
    });
    
}

const getSalario = (id) => {
    return new Promise((resolve , reject) => {
        //cuerpo de la promesa
        const salar = salario.find((e) => e.id === id)?.salario;
        ( salar )
            ? resolve(salar)
            : reject('El usuario no tiene salario')
    });

}


const id = 3;
/* getInfor(id)
    .then(empleadi => console.log(empleadi))
    .catch(err => console.log(err))

getSalario(id)    
    .then(salario => console.log(salario) )
    .catch(error => console.log(error))

 */

/* getInfor(id)
    .then(
        empleado => {
        //console.log(empleado)
            getSalario(id)
             .then(salario => console.log('El empleado:',empleado,' tiene un salario de ',salario))
             .catch(error => console.log(error))
        })
    .catch(err => console.log(err))
     */

//AHORA SE HARÁ EN CADENA 

let nombre;
getInfor(id)
        .then(empleados => {
            nombre = empleados
            return getSalario(id)
        })
        .then(salario => console.log('El empleado ' ,nombre,'tiene un salario',salario))
        .catch(error => console.log(error));
