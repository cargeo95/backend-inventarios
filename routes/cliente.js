const { Router } = require('express')
const {createCliente, getCliente , updateCliente} =
 require('../controllers/cliente')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getCliente)

// actualizar por id
router.put('/:id', updateCliente)

module.exports = router;