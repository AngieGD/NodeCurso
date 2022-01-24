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


const getEmpleado = (id , callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre //Se pone el signo de ? para que en caso de que no encuentre algo no salga error
    if(empleado){
        callback(null , empleado);
    }else{
        callback(`El usuario con id ${id} no existe`)     
    }
}

getEmpleado(10 , (err , empleado) => {

    if(err){
        console.log('ERROR!!')
        return console.log(err)
    }
    console.log('Empleado existe')
    console.log(empleado);      
})

const getInfor = ( id  , callback )=>{
    const empleado = empleados.find((e) => e.id === id)?.nombre

    
    if(empleado ){
        callback(null,  empleado); //Aqui evita el mensaje que retorna el error , null se considera como false
    }else {
        callback(`Empleado con id ${id} no existe`);
    }
}



const getSalario = (id , call) => {
    const elsalario = salario.find((e) => e.id === id)?.salario
    //console.log(elsalario)
    if (elsalario){
        call(null , elsalario)
    } else {
        call('El empleado no tiene salario')
    }
}
const id = 3
getInfor(id , (err , empleado) => { //err , empleado son los parametros de mi callback, 
    if(err) {
        console.log('ERROR')
        return console.log(err)
    }

    getSalario(id , (err , sal) => {
        if(err){
            return console.log(err)
        }
        console.log( `${sal} del empleado ${empleado} `)
    })    
    
})



/*


const getSalariomio = (id , callback) => {
    const empleado = empleados.find((e) => e.id === id)
    const sala = salario.find((e) => e.id === id)
    
    if(sala){
        const sisala = sala.salario
        if(sisala){
            callback(null , `El salario del empleado ${empleado.nombre} es ${sala.salario}`)

        }else {
            callback(`El empleado ${empleado.nombre} no tiene salario :/ `)
        }
    }else {
        console.log('No esta')
    }

}


*/







  //--------------------------------------------------------------------------------------------------
  /*
const personas = [
    {
        id:123,
        nombre: 'Ginna',
        numHijos: 5
    },
    {
        id:124,
        nombre: 'Chava',
        numHijos:1
    },
    {
        id:125,
        nombre: 'Angie'
    }
]

const getlaInfo = (id , personi) => {
    const persona = personas.find( (e) =>   id === e.id)
    if(persona){
            const hijos = persona.numHijos
            if(hijos){
                personi(null , ` ${persona.nombre} Tiene ${hijos} hijos`)
            }else {
                personi(`La persona  ${persona.nombre} con id ${id} no tiene hijos`)
            }
    }else {
        console.log('No era')
    }
    
}



getlaInfo(123 , ( err , perso) => {

    if(err){
        return console.log(err)
    }

    console.log(perso)
    

})
*/