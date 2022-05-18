const {Schema , model }  = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true , 'El nombre es requerido'] //lo segundo es un mensaje de error

    },
    correo: {
        type: String,
        required: [true , 'El correo es requerido'],
        unique: true
    },
    password:{
        type: String,
        required: [true , 'La contraseña es obligatoria']
    },
    img: {
        type:String,
    },
    rol: {
        type:String,
        required: true,
        
    },
    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }
    
});


UsuarioSchema.methods.toJSON = function() {
    const {__v , password , ...usuario } = this.toObject();
    return usuario;
}

module.exports = model('Usuario' , UsuarioSchema);