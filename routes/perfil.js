
const { Router } = require('express');
const { check } = require('express-validator');
const { crearPerfil } = require('../controllers/perfil');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//Todos tiene que pasar por la validación del JWT
router.use(validarJWT);

//Crear un nuevo perfil 
router.post(
    '/',
    [
        
        check('softwares', 'El campo softwares es obligatorio').isArray({ min: 1 }),
        check('skills', 'El campo skills es obligatorio').isArray({ min: 1 }),
        check('country', 'El país es obligatorio').not().isEmpty(),
        check('city', 'La ciudad es obligatoria').not().isEmpty(),
        check('about', 'La descripción es obligatoria').not().isEmpty(),
        check('socialMedia', 'El campo socialMedia debe ser un array').isArray(),
        check('photo', 'La URL de la foto es obligatoria').isURL(),
        validarCampos //Nuestro custom middleware para validar los campos
    ],
     crearEvento);


module.exports = router