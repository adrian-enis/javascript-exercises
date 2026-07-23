/*
Enunciado: dada una palabra, buscarla en una frase y devolver cuantas veces se repite.

Que te piden?

1.-Una frase y buscar las palabras repetidas en ella.

Como logro buscar palabras repetidas?

2.-obtener la frase y separarlas

3.-Contar cuales palabras se repiten y cuales no

4.-Pasar la frase a minusculas para que no se distingan de las mayusculas

Eliminar signos para que las palabras enten limpias

5.-devolver la frase separada con las palabras repetidas o contadas
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