/* 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, 
apellido y edad y los retorne en un string concatenado 
“Hola mi nombre es sebastián yabiku y mi edad 33”*/

let datos = (nombre, apellido, edad) =>{
    console.log (`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)
}

console.log(datos("Edwin", "Perez", 30))

// 2. Cree una función que tome números y devuelva la suma de sus cubos.

function sumaCubos(...rest) {
    let suma = 0;
    for (let i = 0; i < rest.length; i++) {
        suma = suma + Math.pow(rest[i],3)

    }
    return suma
}

console.log (sumaCubos(2,3,5,4,1,7));

/*3. Crear una funcion que me retorne el tipo de valor entregado,
 utilizar la función e imprimir los distintos tipos de JS.*/

 let dato = (a) =>{
     console.log ("El valor es tipo", typeof(a))
 }

 console.log(dato(3));

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function suma(...rest) {
    let suma = 0;
    for (let i = 0; i < rest.length; i++) {
        suma = suma + rest[i]

    }
    return suma
}
console.log (suma(2,3,5,4,1,2));

// 5. Crear una función que reciba una matriz de valores y filtre los valores que no son string

let matriz = [1, "Raúl", 4, Symbol, "Livin", "pepe"]

let result = matriz.filter(e => typeof e !== 'string');

console.log(result);

/*6. Cree una función que tome una matriz de números y devuelva los números mínimos
 y máximos, en ese orden.*/

let matriz = [2, 45, 902, 903, 12, 1, 134];
function minmax(...matriz) {
  let max = Math.max(...matriz);
  let min = Math.min(...matriz);
  let maxmin = [min, max];
  return maxmin;
}

console.log (minmax (...matriz))

/* 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) 
y devuelva una cadena en forma de un número de teléfono. */

let numbers = [1,2,3,4,5,6,7,8,9,0]

function phonenumber(numbers){
let three = numbers.slice(0, 3).join('')
let rest = numbers.slice (3,6).join('')
let final = numbers.slice (6,10).join('')
let phone = `(${three}) ${rest} - ${final}`
return phone
}

console.log(phonenumber(numbers))

/* 8. Cree una función que tome una matriz de matrices con números.
 Devuelve una nueva matriz (única) con el mayor número de cada uno. falta */

let matriz = [[2, 5, 6, 9], [24, 2353, 32, 1], [343, 2, 354]];
let mayores = []
function maxnumber(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    let max = Math.max.apply(null, matriz[i]);
    mayores.push(max);
  }
  return mayores;
}

console.log(maxnumber(matriz));

/*9. Dada una palabra, escriba una función que devuelva el primer 
índice y el último índice de un carácter.*/

function getindex(a, b) {
  let first = a.indexOf(b);
  let last = a.lastIndexOf(b);
  let result = `El primer índice de "${b}" es ${first} y el último es ${last}`
  return result
}

console.log (getindex("delgadillo", "l"))

/*10. Escriba una función que convierta un objeto en una matriz,
 donde cada elemento representa un par clave-valor. */

 let obj = { "1": 500, "2": 15, "5": 4, "4": 480, "10": 87 }; 

 function objtoarray (obj){
    let result = Object.entries(obj);
    return result
 }

 console.log(objtoarray(obj))

/*11. Cree la función que toma una matriz con objetos y 
devuelve la suma de los presupuestos de las personas.*/

let usuarios =[
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]

function sumbudgets (usuarios){
    let presupuesto1 = usuarios[0].budget
    let presupuesto2 = usuarios[1].budget
    let presupuesto3 = usuarios[2].budget

    let sumapres = presupuesto1 + presupuesto2 + presupuesto3
    return sumapres
}

console.log (sumbudgets (usuarios))

/* 12. Cree una función que tome una matriz de estudiantes 
y devuelva una matriz de nombres de estudiantes.*/

let alumnos = [{name:"Steven"}, {name:"Raul"}, {name: "Isaac"}]
let nombresalumnos= []
function getnames (alumnos){
   for (let i=0; i < alumnos.length;i++){
       let nombre = alumnos[i].name
       nombresalumnos.push(nombre)
   }
   return nombresalumnos

}

console.log (getnames (alumnos))

/*13. Escriba una función que convierta un objeto en una matriz de claves y valores.*/

let obj = ({
    likes: 2,
    dislikes: 3,
    followers: 10
  })

 console.log(Object.entries(obj))

/*14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados 
 incluyendo n.*/

let n = prompt("Introduzca el número")

function sumacuadrados(n) {
        let suma = 0;
        for (let i = 0; i <= n; i++) {
            suma = suma + Math.pow(i,2)

        }
        return suma
    }

    console.log(sumacuadrados(n))

/* 15. Cree una función para multiplicar todos los valores
 en una matriz por la cantidad de valores en la matriz dada*/

 let problema = ([2, 3, 1, 0])
let result = []
function valm(problema){
for(i=0; i<problema.length; i++){
    let mult = problema[i] * problema.length
result.push(mult)
}
return  result
}

console.log (valm(problema))

/*16. Cree una función que tome un número como argumento y
 devuelva una matriz de números contando desde este número a cero.*/

function contador(a) {
  let result = [];
  for (let i = 0; i <= a; i++) {
   resta = a - i;
   result.push(resta)
  }
  return result
}

console.log (contador(7))

/* 17. Cree una función que tome una matriz y devuelva
 la diferencia entre los números más grandes y más pequeños.*/

 let array = [10, 4, 1, 4, -10, -50, 32, 21]
function minmax(...array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let diferencia = max-min;
  return `El valor máximo es ${max}, el mínimo es ${min} y la diferencia es ${diferencia}`
}

console.log (minmax (...array))

/*18. Cree una función que filtre las cadenas de una matriz y 
devuelva una nueva matriz que solo contenga enteros. */

let matriz = [1, 2, 3, "x", "y", 10]
function filter(){
    let result = matriz.filter(e => typeof e == 'number')
    return result
}

console.log (filter(matriz))

/*19.Cree una función que tome dos argumentos (elemento, tiempos). 
El primer argumento (elemento) es el elemento que necesita repetirse, 
mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento.
 Devuelve el resultado en una matriz.*/

function repeat(item, times) {
	let result = [];
	for(let i = 0; i < times; i++) {
  	result.push(item)
  }
  return result;
}

console.log (repeat(5,7))

/* 20. Escriba una función, .vreplace () que extienda el prototipo de
 cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus" */

let string = 'Hola, esto es un reemplazo'

function vreplace(string, x){

    let nuevo = string.replace(/o|a|e|i|u/g, `${x}`);
    return nuevo
}

console.log (vreplace(string, "u"))

/* 21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" 
y devolver una cadena como esta:
 "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".*/

let frase = 'Estoy buscando a Nemo'

function buscando (frase, x){
    let found = frase.split (" ");
    return `¡Encontré a Nemo en el ${found.indexOf(x)+1}!`

}

console.log (buscando(frase, "Nemo"))

/* 22. Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"*/

let string= 'Hola'

function mayus(string){
    let lastchar = string.slice(-1);
    let result = string.replace(lastchar, `${lastchar.toUpperCase()}`)

    return result
    }

console.log(mayus(string))
