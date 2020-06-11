const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err)
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDB()
    const porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

const getListar = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {

    cargarDB()
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (nuevoListado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardarDB()
        return true
    }

}

module.exports = {
    crear,
    getListar,
    actualizar,
    borrar
}