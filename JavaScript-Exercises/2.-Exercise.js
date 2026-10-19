/**Escribe una función que determine si una palabra es capicúa */

function polindromo(str){
  if(typeof str !== "string"){
  throw new Error("Debes introducir un string")
    
  }
  let word = str.split("").reverse().join("")
  return str == word
}

console.log(polindromo("hola"))