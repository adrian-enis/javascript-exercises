
/**
 * Dada una cadena de texto, darle vuelta e invertir el orden de sus
 * caracteres sin usar metodos propios del lenguaje, solo estructuras
 * de control
 */

function chainText(text){
  
    let reverWord = "";
    for(let i = text.length - 1; i >=0; i--){
        reverWord += text[i];
    }

    return reverWord
}

console.log(chainText("Hola"))