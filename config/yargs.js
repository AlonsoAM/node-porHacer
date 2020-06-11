const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
completado = {
    alias: 'c',
    default: true,
    desc: 'Indica si la tarea ya se ha completado o está pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}