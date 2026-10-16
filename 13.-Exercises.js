/**
 * Dado un array, dividirlos en tantos subarray sean posibles
 * basandonos en el numero de su tamaño
 * Ejemplo: array([7,8,9,19], 2) => [7,8][9,19]
 */

function dividirArrays(array,indicador){
   
    let resultado = [];
    for(let i = 0; i <= array.length; i += indicador){
        let pedazo = array.slice(i, i + indicador);
        if(pedazo.length > 0){

            resultado.push(pedazo)
        }
    }
    return resultado
}

console.log(dividirArrays([1, 2, 3, 4], 10));


