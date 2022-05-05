
const express = require('express');
const cors = require('cors');

const {dbConection} = require('../database/config.db')
class Server {

    constructor() {
        this.app = express();
        
        this.usuariosPath ='/Api/usuarios';
        
        this.port = process.env.PORT;

        //Conectar base de datos:
        this.conectarBD();

        //Middlewares
        this.middelwares();
        //Rutas de aplicación 
        this.routes();

        

    }

    async conectarBD(){

        await dbConection();

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