const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors/safe');


let comando = argv._[0];
// console.log(argv);
switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        porHacer.guardarDB()
            // .then(archivo => console.log(`Archivo Creado: `))
            //     .catch(e => console.log(e));
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log(colors.green('=====por Hacer========'));
            console.log(colors.green(tarea.descripcion));
            console.log('Estado', tarea.completado);
            console.log(colors.green('============================'));
        }

        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}