require('colors');


const mostrarMenu = () =>{

    return new Promise(resolve =>{


             console.clear();

            console.log("*****************************".yellow);
            console.log("  Seleccione una opcion ".blue);
            console.log("*****************************\n".yellow);
        
            console.log(`${'1'.green}.Crear tarea `);
            console.log(`${'2'.green}.Listar tarea `);
            console.log(`${'3'.green}.Listar tareas completadas `);
            console.log(`${'4'.green}.Listar tareas pendientes `);
            console.log(`${'5'.green}.Completar tareas `);
            console.log(`${'6'.green}.Borrar tarea `);
            console.log(`${'0'.green}.Salir \n`);
        
        
            //Interfase necesaria
            const readline = require('readline').createInterface({
                input:process.stdin,
                output:process.stdout
            });
        
            readline.question('Seleccione una opcion: ',(opt)=>{
                //captura lo que el usuario teclea
                // console.log({opt});
                readline.close();
                //resolucion de la promesa
                resolve(opt);
            })
    });
}

const pausa = () =>{

    return new Promise( resolve =>{
        
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readline.question(`\nPresione ${'Enter'.green} pra continuar\n`,(opt)=>{
            readline.close();
            resolve();
        })

    });
}


//exportar el menu
module.exports = {
    mostrarMenu,
    pausa
}