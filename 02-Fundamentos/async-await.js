/*
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

const getInfoUsuario = async (id) => {

    try {
    const empleado = await getInfor(id);
    const salario = await getSalario(id);

    return `El salario del empleado ${empleado} es de ${salario}`;
    } catch(error){
        throw error;
    }
}



const id = 10;
getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
    

*/