const { Router } = require('express')
const {createEtapa , getEtapa, updateEtapa} =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

// actualizar por id
router.put('/:id', updateEtapa)

module.exports = router;