/**
 * Dado un texto  una busqueda, encontrar todas las palabras
 * que coincidan con el texto censurado: [-censurado-]
 * ej: "El perro corre solo con el perro"
 * busqueda:perro
 * resultado: El [-CENSURADO-] corre solo con el [-CENSURADO-]
 */

function wordMask(text,search){

    if(!text || !search){
        return "No puedes leer el texto y la busqueda"
    }

    const patron = RegExp(search, "gi")
    const textMask = text.replace(patron, "[-CENSURADO-]")

    return textMask
}

console.log(wordMask("El perro corre solo con otro perro", "perro"))
