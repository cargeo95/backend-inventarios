const { Router } = require('express')
const {createUniversidad, getUniversidad, updateUniversidad} =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidad)

// actualizar por id
router.put('/:id', updateUniversidad)

module.exports = router;