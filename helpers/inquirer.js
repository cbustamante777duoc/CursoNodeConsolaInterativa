const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'¿que desea hacer?',
        choices:['opt1','opt2','opt3']
    }
];

const inquirerMenu = async() =>{

    // console.clear();

    console.log("*****************************".yellow);
    console.log("  Seleccione una opcion ".blue);
    console.log("*****************************\n".yellow);

    const opt =  await inquirer.prompt(preguntas);

    return opt;



}


module.exports = {
    inquirerMenu
    
}