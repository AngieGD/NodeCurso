const { Console } = require('console');
const http = require('http');
//Crear servidor
http.createServer((req , res)=>{ //req es lo que solicitan | res es lo que el servidor responde
    
    //res.writeHead(201)

    res.write('HOLI MUNDO');
    res.end(); //Aqui le dice que terminó de escribir la respuesta
})
.listen(3000);


console.log('Escuchando en el puerto',3000);
