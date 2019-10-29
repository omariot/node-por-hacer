const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error guardando el archivo.', err);
    });
}

const cargarDb = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    } catch(error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let indexPorHacer = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if ( indexPorHacer >= 0 ) {
        listadoPorHacer[indexPorHacer].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);
    if ( nuevoListado.length === listadoPorHacer.length ) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}