const express = require('express')
const hbs = require('hbs')

const app = express()


//Con esto ya vamos a renderizar 
app.set('view engine', 'hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico 
app.use( express.static('public'));

app.get('/',  (req, res)=> {
  res.render('home' , {
    nombre: 'Angie García',
    titulo: 'Curso '
  })
});

app.get('/generic', (req,res) => {
  res.render('generic' , {
    nombre: 'Angie'
  })
})

/* app.get('/generic' , (req,res)=> { //Con esto hago que la ruta http://localhost:3000/generic funcione
  res.sendFile(__dirname + '/public/templates/generic.html')
}); */

/* app.get('/elements' , (req,res)=> { //Con esto hago que la ruta http://localhost:3000/elements funcione
  res.sendFile(__dirname + '/public/templates/elements.html')
}); */

app.get('/elements' , (req,res)=> { 
  res.render('elements' , {
    nombre: 'Angie'
  })
});


//La siguiente ruta es un comodin para que se dispare cualquier ruta que no sea las definidas
app.get('*' , (req,res)=> {
  res.send('404| page not found')
});

app.listen(3000)

//Hola




