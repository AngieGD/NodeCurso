
const {response , request} = require('express')
const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async (rol = '' ) => {
    
    const existRol = await Role.findOne({ role:rol });
    
    if(!existRol) {
        throw new Error(`El rol ${rol} no existe en la base de datos`);
    }
}

const existeEmail = async (correo = '') => {
    const existEmail  = await Usuario.findOne({ correo:correo });
    if(existEmail) {
        throw new Error(`El correo ${correo} ya existe`);              
    }
}

const existeUsuarioId = async (id) => {
    const existId  = await Usuario.findById(id);
    if(!existId) {
        throw new Error(`El usuario con id ${id} no existe`);              
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioId
}