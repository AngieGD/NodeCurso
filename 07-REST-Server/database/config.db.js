const mongoose = require('mongoose');

const dbConection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Base datos Online')

    } catch(error) {
        console.log(error)
        throw new Error('Error en la base de datos');

    }

}

module.exports = {
    dbConection
}


// const {Sequelize} = require('sequelize');



// const sequelize = new Sequelize(process.env.BD_WHATOKO)
// // const sequelize = new Sequelize(process.env.DATABASE , process.env.USER , process.env.PASS , {
// //     host   : process.env.HOST,
// //     dialect: process.env.DIALECT
// // })

// const dbConection  = async () => {
    
//     try {
//         await sequelize.authenticate();
//         console.log('conexion exitosa');
        
//     } catch (error) {
//         console.log(error)
//         throw new Error('Error en la conexion')
        
//     }
// }

// module.exports = {
//     dbConection,
//     sequelize
// }