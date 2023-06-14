const Cliente = require('../models/clientes')
const { request, response} = require('express')

// crear
const createCliente = async (req = request, 
    res = response) => {
    try{
        
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const clienteBD = await Cliente.findOne({nombre})

        if(clienteBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        
        const email = req.body.email
        const emailBD = await Cliente.findOne({email})

        if(emailBD){
            return res.status(400).json({msg: 'Ya existe'})
        }

        const data = {
            nombre,  // nombre: nombre
            email
        }

         
        const cliente = new Cliente(data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)

    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getCliente = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const cliente = await Cliente.find({estado})//select * from tipoEquipo where estado=?
            return res.json(cliente)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateCliente = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const clienteBD = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(clienteBD)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { createCliente, getCliente, updateCliente}