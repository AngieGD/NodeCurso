console.log('Inicio de programa');

setTimeout(() => {
    console.log('primer Timeout');

} , 3000);

setTimeout(() => {
    console.log('segundo Timeout');

} , 0);

setTimeout(() => {
    console.log('tercer Timeout');

} , 0);

console.log('Fin de programa');