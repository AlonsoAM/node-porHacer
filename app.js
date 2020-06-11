const { argv } = require('./config/yargs')

const { crear, getListar, actualizar, borrar } = require('./por-hacer/por-hacer');

const colors = require('colors');

console.log(argv)

const comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        let listado = getListar()
        for (const tarea of listado) {
            console.log('==========Por Hacer=========='.green)
            console.log(tarea.descripcion)
            console.log('Estado:', tarea.completado)
            console.log('============================='.green)
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion)
        console.log(borrado)
        break

    default:
        console.log('Comando no reconocido')
        break;
}