// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/

//una manera de resolverlo sería:
/*   var matriz = [];
  for(var key in objeto) {
    matriz.push([key, objeto[key]])
  }
  return matriz;
//otra manera:
return Object.entries(objeto);
} */
    //Escribe tu código aquí
  var array = Object.keys(objeto).map( (a) => {
    return [a, objeto[a]];
  });
  return [array];
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  
  //otra forma:

/*   var cantCaracteres = {};
  for(var i = 0; i < string.length; i++){
  if(cantCaracteres.hasOwnProperty(string[i])){
    cantCaracteres[string[i]]++;                       || cantCaracteres[string[0]] = cantCaracteres[string[0]] + 1
  } else {
    cantCaracteres[string[i]] = 1;
  return cantCaracteres;
  } */

  //otra forma (si no podemos usar el hasOwnProperty):
  
/*   if(strings[i] in cantCaracteres){
    cantCaracteres[string[i]]++;                      || cantCaracteres[string[0]] = cantCaracteres[string[0]] + 1
  } else {
    cantCaracteres[string[i]] = 1;  
  return cantCaracteres;
  } */
  //Escribe tu código aquí
  var CantidadDeCaracteres = {};
  for(var i in string) {
    CantidadDeCaracteres[string[i]] = (CantidadDeCaracteres[string[i]] || 0) + 1;
  }
  return CantidadDeCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var minuscula = "";
var mayuscula = "";
for(var i = 0; i < s.length; i ++) {
  if(s[i] === s[i].toLowerCase()) {
    minuscula += s[i];
  } else {
    mayuscula += s[i];
  }
}
return mayuscula + minuscula
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  /* la forma más larga sería:
  var strArray = str.split(" ");
  var contenedor = [];
  for(var i = 0; i < strArray.length; i++){
    var Palabras = strArray[i];
    var ArrayDeArrays = Palabras.split("");
    var PalabrasInvertidas = ArrayDeArrays.reverse();
    var PalabrasUnidas = PalabrasInvertidas.join("");
    contenedor.push(PalabrasUnidas);
  }
  return contenedor.join(" ");
}
   */
  //Escribe tu código aquí
  var strArray = str.split(" ");
  var contenedor = [];
  for(var i = 0; i < strArray.length; i++){
    contenedor.push(strArray[i].split("").reverse().join(""));
  }
  return contenedor.join(" ");
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  /* forma más rápida (utilizando operador condicional ternario):
   return numero.toString() === numero.toString().split("").reverse().join("") ? "Es capicua" : "No es capicua";
   */
  //Escribe tu código aquí
  var numeroNormal = numero.toString();
  var numeroInvertido = numero.toString().split("").reverse().join("");
  if(numeroNormal === numeroInvertido){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
return cadena.replace(/[abc]/gi, "")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
/* una manera:
  return arr.sort((a,b) => a.length - b.length);
  o también, omitiendo "callback":
  return arr.sort(function(a,b){return a.length - b.length});
*/
  //Escribe tu código aquí
  var callback = arr.sort(function(a,b){ return a.length - b.length});
  return callback;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var ArrCombinado = [];
  for(let i of arreglo1){
    for(let e of arreglo2){
      if(i === e){
        ArrCombinado.push(i);
      }
    }
  }
  return ArrCombinado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

