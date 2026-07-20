/*
Enunciado: dada una palabra, buscarla en una frase y devolver cuantas veces se repite.

1.- Una funcion que recibe 2 parametros, frase, palabra
2.- Un inciador que inicia en 0, aqui se guarda cuantas
	veces aparece la palabra
3.- Dividir la frase en una lista
4.- Recorrer la lista con un bucle
5.- verificar si las palabras de la lista es igual a la palabra_buscar
6.- si la palabra de la lista es igual a la palabra_buscar, sumar 1 al contador
7.- devolver el valor final
*/


//1.-
function countWord(frase, palabra_buscar){
    let contador = 0;
    const listFrase = frase.split(" ");

    for(let i = 0; i< listFrase.length; i++ ){
        if(listFrase[i] === palabra_buscar){
            contador++    
        } 
    }

    return contador
}

console.log(countWord("el perro corre con el gato", "el"))
