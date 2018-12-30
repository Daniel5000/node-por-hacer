const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripciòn de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    },
    borrar: {
        alias: 'b',
        default: true,
        desc: 'Marca la descripcion del elemento a borrar'
    }

}

const argv = require('yargs')
    .command('crear', 'Genera un elemento por hacer', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar', 'borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}