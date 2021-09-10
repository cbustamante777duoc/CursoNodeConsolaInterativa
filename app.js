const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');

    console.clear();

const main = async () =>{
    console.log('funcion main');

    mostrarMenu();
    
    pausa();


}

main();