//setTimeout( () => {
    //console.log('Holis') 
//} , 1000);

const getUsuarioByID = (id , callback) => {

    const usuario = {
        id, //es lo mismo que id:id
        nombre: 'Angie'
    }

    setTimeout(() => {
        callback(usuario)

    } , 1000)

}
/*

getUsuarioByID(15 , (usu) => {
    console.log(usu);
});
*/
/*
const list = [1 , 5 , 2]

list.forEach(function(a,b) {
    console.log("i=", a, "list=", b);
  });
*/
// [1 , 5 , 2].forEach((a,b) => console.log("i=", b, "list=", a) ) ;

const animales = {
    especie: "Perro",
    edad: "11",
    pesokg: 2,
    edaddueños: [5 , 11  , 30 , 32],
    nombre: "Bruno"

}

animales.edaddueños.forEach((i , j , k) => {
    console.log(k)
    });



/* 
 const prod = ["Colombia" , "Pasta" , "Sal"]

prod.forEach((ele , i , j ) => {
    console.log( i , j, ":Ingrese el precio de: "  , ele)

}) */



const sumar = (a , b , callb) => {
    return callb(a+b)
}

sumar(1 , 2 , (d) => {
    console.log("La suma es" , d)
});

let mostrarmensaje = () => {
    console.log('Se ha ejecutado el callback.');
};

//Se ejecuta muchas veces
setInterval(mostrarmensaje , 3000);
 


