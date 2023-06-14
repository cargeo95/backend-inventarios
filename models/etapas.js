const { Schema, model} = require('mongoose')

const EtapasSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapa', EtapasSchema)
