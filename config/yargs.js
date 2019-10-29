const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer',
    {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar la tarea por hacer', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}