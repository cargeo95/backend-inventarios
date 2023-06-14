const {Schema, model} = require('mongoose')

const UniversidadesSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Nombre ya existe']
    },
    direccion: {
        type: String,
        required: [true, 'Direccion requerido']
    },
    telefono: {
        type: String,
        required: [true, 'Telefono requerido']
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

module.exports = model('Universidad', UniversidadesSchema)
