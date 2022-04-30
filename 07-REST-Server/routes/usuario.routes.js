const {Router} = require('express');
const router = Router();

const { usuarioGet,
         
         usuarioPost, 
          } = require('../controllers/usuario.controllers');


router.get('/greeting', usuarioGet);

     

router.post('/register',usuarioPost);     

             

module.exports = router;