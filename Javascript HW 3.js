// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código: el método. shift (elimina y retorna)
  // array --> [8, 9, 10, 12, 14]
  // array --> [9, 10, 12, 14]
  // return array[0]  <-- (otro metodo)
  var shift = array.shift() //8
  return shift;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // el .shift nos elmina el primer elemento, y el pop el último.
  // return array [array.length-1]; <-- otro método
  var valor = array.pop()
  return valor;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  // return array.length;
  var longitud = array.length
  return longitud;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // matriz es lo mismo que un array.
  // array --> [1, 2, 3, 4, 5]
  // posición   0, 1, 2, 3, 4
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++){
    var suma = array[i] + 1;
    //    2 =      1    + 1
    nuevoArray.push(suma);
    //[2, 3, 4, 5, 6]
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  // si retornamos al principio, solamente nos devolverá el elemento.
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // el método .join separa los componentes del array según lo que pongamos (en este caso, un espacio)
  var string = palabras.join(" ");
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // elemento --> 5
  // array --> [1, 6, 5, 8]
  // no se agrega el "else" porque sino se cortaría la ejecución en el primer elemento (antes de llegar a 5)

  for(var i = 0; i < array.length; i ++) {

    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // [1, 6, 8, 4]
  //  0  1  2  3 
var total = 0;

for(var i = 0; i < numeros.length; i++){
  total = total + numeros[i];
}
return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  var cantidad = resultadosTest.length;

  for (var i = 0; i < resultadosTest. length; i++){
    suma = suma + resultadosTest[i];
  }
  var promedio = suma / cantidad;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // otro metodo -> return Math.max(...numeros)
  // comienzo a recorrer desde la posición 1 porque ya usé el 0.

  // numeros --> [4, 1, 6, 2, 9]

  var max = numeros[0]; //4
  for (var i = 1; i < numeros.length; i ++){
    if(max < numeros[i]){
      max = numeros[i];
    }
  }
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // arguments --> [] = 0
  if(arguments.length === 0){          // si argumentos es un objeto vacío (o sea, no contiene nada)
    return 0;
  }

  if(arguments.length === 1){
    return arguments[0];
  }
  var total = arguments[0];

  for(var i = 1; i < arguments.length; i ++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // arreglo --> [20, 9, 19, 7] --> 2

  var acumulador = 0;   // lo pruebo con el 0 que valdrá 20, el 1 que valdrá 9, el 2 que valdrá 19, etc.
  for(var i = 0; i < arreglo.length; i ++){
    if(arreglo[i] > 18){
      acumulador = acumulador + 1
    }
  }
 return acumulador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
/* 
1 -> domingo
2 -> lunes
3 -> martes
etc.
*/
 if(numeroDeDia === 7 || numeroDeDia === 1) {
  return "Es fin de semana";
 }
  return "Es dia Laboral";
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // el método toString convierte cualquier cosa a string.
  // nos ayuda a obtener la representación en cadena de caracteres de un objeto.
  // poniendo el primer arreglo [0] me aseguro que comience con nueve.
  // si no ponemos el 9 entre comillas nos tirará error porque espera un string, no un número.
  let numero = n.toString()

  if(numero[0]==="9"){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  //otro método:  
  /* for(let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] !=== arreglo[i + 1]) {
      return false;
    }
  }
  return true; 
  */
  // arreglo [97, 100, 190, 9]
  //        [i]  [i+1]
  for(let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] === arreglo[i + 1]) {
      return true;
    }
  }
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // también el statement if podría ser:
  /* if (nuevoArray.length !== 3) {
    return "No se encontraron los meses pedidos";
   } */
  // Tu código:
    let nuevoArray =[]
  for(let i = 0; i < array.length; i++){
    if(array[i]==="Enero" || array [i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i])
    }
  }
 if (nuevoArray.length < 3) {
  return "No se encontraron los meses pedidos";
 }
 return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100) {
      nuevoArray.push(array[i])
    }
}
return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  /*
  numero = numero + 2 --> hasta 10 veces
  cont = cont + 1
  array.push(numero)
  retornar array
  numero === cont --> break
  retornar "Se interrumpió la ejecucón"
  */
 // manera de hacerlo: 
 /* var nvoArray = [];
 var cont = 0;
 for(var i = 1; i <= 10; i++){
  numero = numero + 2;
  cont = i;
  array.push(numero);
  if(numero === cont){
    break;
    }
  }
   if(numero === cont){
    return "Se interrumpió la ejecución"
  } else {
    return array;
  }
 } */
  // Tu código:

  let nuevoArray= []
  var suma = numero 

  for(var i = 0; i < 10; i++){
    suma = suma + 2;
    if (suma === i) {
      break;
    } else{
      nuevoArray.push(suma)
    }
  }
    if(i < 10) {
  return "Se interrumpió la ejecución"
} else {
  return nuevoArray
}
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
/* 
var array =[];
var cont = 0;
for(var i = 1; i <= 10; i++){
  if(cont === 5){
  continue;
}
numero = numero + 2;
cont = i;
array.push(numero)
}
return array;
}
*/

  // Tu código:
  var array = []
  var suma = numero;
  for (var i = 0; i < 10; i ++) {
    if ( i === 5) {
      continue;
    } else {
      suma = suma + 2;
      array.push(suma)
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------
