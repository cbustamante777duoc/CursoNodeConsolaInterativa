const inquirer = require('inquirer');
require('colors');


//arreglo que va hacer leido por inquirer
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

    //opt va a contener todo lo que el usuario tecleo
    const opt =  await inquirer.prompt(preguntas);

    return opt;



}


module.exports = {
    inquirerMenu
    
}