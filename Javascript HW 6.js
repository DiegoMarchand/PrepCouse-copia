// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  /* también podría ser: 
   function Mayuscula(nombre) {
    var entrada = nombre[0].toUpperCase();
    return entrada + nombre.slice(1)
  }
  */
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  /* como cb no es más que una función dentro de otra función, se invoca como
  cualquier función.
   */
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  /* 
  es lo mismo que el ejercicio anterior, pero con propiedades en la función
   */
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /* forma de hacerlo con un bucle for:
  var suma = 0;
  for(var i = 0; i < numeros.length; i ++) {
    suma = suma + numeros[i];
  } cb(suma);
}
   otra forma de hacerlo con reduce():
   var resultado = numeros.reduce((a,b) => (a + b), 0);
   el acc vendría a ser el "valor previo", mientras que el curr el 
   "valor siguiente".
   El reduce vendría a hacer lo que ya hicimos con el ciclo for. */ 

  var resultado = numeros.reduce(function(acc, curr) { 
    return acc + curr;
  }, 0); 
cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /* lo resuelve con una a en la function (la cual hace referencia a 
    cómo va a iterar el forEach, o sea, "a" va a tomar el valor de cada
    posición en nuestro Array).
  */
  array.forEach(function(a) {
    cb(a)
  })
  /* si lo hiciéramos con un bucle for, la única diferencia es que
  tendríamos que pasar (array[i]) en lugar de (a) al cb.
  en este caso, es innecesario colocar return porque nuestra
  función callback ya está retornando algo.
  42:00 */

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  /* 
  el método map nos retorna un array con lo que le hayamos 
  pasado a la función. A diferencia del forEach, sí tenemos que 
  retornar algo.
  esto es lo que hace map: osotros vamos retornando el elemento mientras 
  que callback lo va almacenando en un nuevo array. [cb(elemento)]
   */
  //Tu código:
  var NuevoArray = array.map(function(elemento){
    return cb(elemento)
  })
  return NuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = array.filter(function(e) {
    return e[0] === "a";
  })
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------