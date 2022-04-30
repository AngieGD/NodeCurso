
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        
        this.usuariosPath ='/demo';
        
        this.port = process.env.PORT;
        //Middlewares
        this.middelwares();
        //Rutas de aplicación 
        this.routes();

        

    }

    middelwares() {
        
        //CORS
        this.app.use(cors());
        //Parseo y lectura
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

      this.app.use(this.usuariosPath, require('../routes/usuario.routes'));
    }

    listen() {
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo' , this.port);
        })
    }

}

module.exports = Server;