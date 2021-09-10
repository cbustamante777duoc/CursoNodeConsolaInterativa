require('colors');
const { inquirerMenu } = require('./helpers/inquirer');



    console.clear();

const main = async () =>{
    console.log('funcion main');

    
    let opt = '';
    
    do {
        //espera lo que escriba el usuario
        opt = await inquirerMenu();
        console.log({opt});

        // if (opt !== '0') {
            
        //     await pausa();
        // }
        
    } while (opt !== '0');

    // pausa();


}

main();