require('dotenv').config();
//prueba
const express = require('express')
const hbs = require('hbs')
const app = express()

//const port = 8080
const port = process.env.PORT; //con esto, en caso de que este dusponible mi puerto define por si mismo uno que está disponible
              

//Con esto ya vamos a renderizar 
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico !!!!
app.use( express.static('public')); //Busca en la carpeta public un index 

/* app.get('/',  (req, res)=> {
  res.render('home' , {
    nombre: 'Angie García',
    titulo: 'Curso '
  })
}); */
/* 
app.get('/generic', (req,res) => {
  res.render('generic' , {
    nombre: 'Angie'
  })
}) */

/* app.get('/generic' , (req,res)=> { //Con esto hago que la ruta http://localhost:3000/generic funcione
  res.sendFile(__dirname + '/public/templates/generic.html')
}); */

/* app.get('/elements' , (req,res)=> { //Con esto hago que la ruta http://localhost:3000/elements funcione
  res.sendFile(__dirname + '/public/templates/elements.html')
}); */

/* 
app.get('/elements' , (req,res)=> { 
  res.render('elements' , {
    nombre: 'Angie'
  })
});
 */

//La siguiente ruta es un comodin para que se dispare cualquier ruta que no sea las definidas
app.get('*' , (req,res)=> {
  res.sendFile(__dirname + '/public/index.html')
});

app.listen(port , ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})

//Hola




