/**
 1.- crear una funcion que reciba un numero como parametro
 2.- crear un contador y tenerlo en 10
 3.- usar un loops, para incrementar el numero con el cual el parametro sera multiplicado
 4.- usar tablaMultiplicar (que contiene el titulo), y sumarle el numero a multiplicar junto con el iterador
 5. retornar el valor
 nota: recuerda colocar los saltos de linea \n
 */

function tabla(num_base){
    let tablaMultiplicar = `La tabla de multiplicar del ${num_base}\n`
    let count = 10;
    for(let i = 0; i <= count; i++){
     tablaMultiplicar += `${num_base} X ${i} = ${num_base * i}\n`
    }
    return tablaMultiplicar

}
console.log(tabla(5))