//Requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('================================');
    console.log(`==========Tabla del ${base}==========`.green);
    console.log('================================');

    for (let i = 1; i < limite + 1; i++) {
        console.log(`${i} X ${base} = ${i*base}`);
    }
};


let CrearArchivo = (base, limite) => {
    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        message = '';

        for (let i = 1; i < limite + 1; i++) {
            console.log(`${base} X ${i} = ${base * i}`);
            message += `${base} X ${i} = ${base * i} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, message, (err) => {
          if (err)
            reject(err)
          else
            resolve('Archivo creado exitosamente: '+`tabla-${base}.txt`.green);
        });

    });
};

module.exports = {
    CrearArchivo,
    listarTabla
};