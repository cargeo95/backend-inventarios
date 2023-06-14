const TipoProyecto = require('../models/tipoProyectos')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, 
    res = response) => {
    try{
        
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoProyectoBD = await TipoProyecto.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(tipoProyectoBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const tipoProyectoBD = await TipoProyecto.find({estado})//select * from tipoEquipo where estado=?
            return res.json(tipoProyectoBD)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateTipoProyecto = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoProyectoBD = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoProyectoBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { createTipoProyecto, getTipoProyecto, updateTipoProyecto}