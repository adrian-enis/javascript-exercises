// Write a function that count the number of character in a chain text

{
    const contarCaracteres = (cadena = "") => {
      (!cadena) ? console.warn("No ingreso la cadena") : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
    }
  
    contarCaracteres("hola mundo") //Output: La cadena "hola mundo" tiene 10 caracteres
}