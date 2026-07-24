/*
Enunciado: dada una palabra, buscarla en una frase y devolver cuantas veces se repite.

Que te piden?

1.-Una frase y buscar las palabras repetidas en ella.

Como logro buscar palabras repetidas?
2.- Iniciar un contador en 0.
3.-obtener la frase y limpiamos minusculas, simbolos y separamos la frase en lista
4.- la palabra_buscada, solo la limpiamos a minusculas
5.- Recorrer la lista (la que separamos en el punto 2.-), agregamos o instanciamos una nueva variable
que se encargara de recorrer la frase en lista, pero ademas, iremos comparando si la nueva
variable es igual a la palabra buscada, en tal caso, sumamos el contador
6.- retornar el resultado
*/


//1.-

function countWord(frase, palabra_buscada){
    // 1. Iniciamos el contador
    let contador = 0;
    
    // 2. Limpiamos: minúsculas -> quitamos símbolos -> cortamos en lista
    // (Asegúrate de limpiar también palabra_buscada por si viene en mayúsculas)
    const palabraLimpia = palabra_buscada.toLowerCase();
    const listaPalabras = frase.toLowerCase().replace(/[^a-z0-9\s]/gi, "").split(" ");

    // 3. Recorremos la lista palabra por palabra
    for (const palabraActual of listaPalabras) {
        // 4. Preguntamos: ¿La palabra actual de la lista es la que busco?
        if (palabraActual === palabraLimpia) {
            contador++; // Sumamos 1 si coinciden
        }
    }
    
    // 5. Devolvemos el resultado final
    return contador;
}

// Prueba:
console.log(countWord("¡Hola! Hola a todos, hola.", "hola")); // Devuelve 3