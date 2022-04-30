const {v4:uuidv4} = require('uuid')

class Tarea {
    id ='';
    desc = '';
    completadaEn = null;

    constructor(desc){
        this.id = uuidv4(); //Genera un id unico 
        this.desc = desc;

    }
}


modulo.exports = Tarea;
