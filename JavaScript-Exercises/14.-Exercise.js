/**
 * Dado un string y un numero
 * repetir el string segun lo
 * que el numero indique
 */

function repetirString(str, numero){
  
    return (str + "\n").repeat(numero).trimEnd()
}

console.log(repetirString("soy una cadena", 2))