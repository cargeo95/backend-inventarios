const Etapa = require('../models/etapas')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapaBD = await Etapa.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(etapaBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getEtapa = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const etapaBD = await Etapa.find({estado})//select * from tipoEquipo where estado=?
            return res.json(etapaBD)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateEtapa = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const etapaBD = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapaBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { createEtapa, getEtapa, updateEtapa}