const {Schema , model} = require('mongoose')

// const { sequelize } = require("../database/config.db")
// const { DataTypes } = require('sequelize');

// const Role = sequelize.define('Role' , {
//     role: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// })



const RoleSchema = Schema({

    role: {
        type:String,
        required: [true , 'El rol es obligatorio']
        
    }    

})

module.exports = model('Role' , RoleSchema)