const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto , updateTipoProyecto} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

// actualizar por id
router.put('/:id', updateTipoProyecto)

module.exports = router;