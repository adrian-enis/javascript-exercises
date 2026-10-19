/*
Dado un par de numeros, encontrar cuantos impares hay entre ellos
ejem: (1,100) = 50
* */

// function evenNum(num1,num2){

//     let inicio = Math.min(num1,num2);
//     let final = Math.max(num1,num2);
//     let total = final - inicio + 1;
//     let resultado;

//     if(inicio % 2 !== 0 && final % 2 !== 0){ 
//         resultado = Math.floor(total / 2) + 1;
//     }else{
//         resultado = Math.floor(total / 2);
//     }
//     return resultado
// }

// console.log(evenNum(1,3866))
//Mañana hacer el otro metodo

function evenNum(num1, num2){
    let inicio = Math.min(num1,num2)
    let final = Math.max(num1,num2)
    let contador = 0;
    for(let i = inicio; i <= final; i++){
        if(i % 2 !== 0){
            contador++
        }
    }

    return contador
}
console.log(evenNum(1,3866))