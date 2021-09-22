//Crear objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //Metodo
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`

    }
}

console.log(deadpool.getNombre())

//const nombre = deadpool.nombre;
////const apellido = deadpool.apellido;
//co/nst poder = deadpool.nombre;

//console.log(nombre , apellido , poder)

// DESESTRUCTURACIÓN 

const {nombre , apellido , poder}= deadpool;

//Desestructuración en los argumentos de una función
function mostrar({nombre , apellido}){
    console.log(nombre , apellido )
}

//Desestructurar arreglos
const heroes = ['Angie' , 'Cristobal' , 'Patricia'];
 //const h1 = heroes[0];
 //console.log(h1)

 // Así los traigo todos
 const [h1 , h2 , h3] = heroes;
 console.log(h1);

 //Tambien puedo traer solo algunos

 const [ ,  , j3] = heroes;
 console.log(j3)

