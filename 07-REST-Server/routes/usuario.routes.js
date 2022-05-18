const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();

const { esRoleValido, existeEmail, existeUsuarioId } = require('../helpers/db-validator');
const { validarCampos } = require('../middleware/verificar-usuario');

const { usuarioGet,usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuario.controllers');


router.put('/:id',[
    check('id' , 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioId),
    check('rol').custom(esRoleValido),
    validarCampos
] , usuarioPut);

router.get('/' , usuarioGet);

     

router.post('/',[
    check('password' , 'Debe tener más de 6 caracteres').isLength({min:6}),
    check('name' , 'El nombre es obligatorio').not().isEmpty(),    
    check('correo' , 'el correo no es valido').isEmail(),
    check('correo').custom(existeEmail),
    //check('rol' , 'El rol no es valido').isIn(['ADMIN' , 'SUPER_ADMIN']),
    check('rol').custom(esRoleValido),
    validarCampos
],usuarioPost);     

router.delete('/:id' , [
    check('id' , 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioId),
    validarCampos 
],usuarioDelete);

module.exports = router;