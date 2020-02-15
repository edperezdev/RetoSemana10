/* 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado 
“Hola mi nombre es sebastián yabiku y mi edad 33”*/

// let datos = (nombre, apellido, edad) =>{
//     console.log (`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)
// }

// console.log(datos("Edwin", "Perez", 30))

// 2. Cree una función que tome números y devuelva la suma de sus cubos.

// function sumaCubos(...rest) {
//     let suma = 0;
//     for (let i = 0; i < rest.length; i++) {
//         suma = suma + Math.pow(rest[i],3) 
        
//     }
//     return suma
// }

// console.log (sumaCubos(2,3,5,4,1,7));

/*3. Crear una funcion que me retorne el tipo de valor entregado,
 utilizar la función e imprimir los distintos tipos de JS.*/

//  let dato = (a) =>{
//      console.log ("El valor es tipo", typeof(a))
//  }

//  console.log(dato(3));

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

// function suma(...rest) {
//     let suma = 0;
//     for (let i = 0; i < rest.length; i++) {
//         suma = suma + rest[i]
        
//     }
//     return suma
// }
// console.log (suma(2,3,5,4,1,2));

// 5. Crear una función que reciba una matriz de valores y filtre los valores que no son string

// let matriz = [1, "Raúl", 4, Symbol, "Livin", "pepe"]

// let result = matriz.filter(e => typeof e !== 'string');


// console.log(result);
