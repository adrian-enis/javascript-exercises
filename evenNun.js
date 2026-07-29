/*
Dado un par de numeros, encontrar cuantos impares hay entre ellos
ejem: (1,100) = 50
* */

function evenNum(num1,num2){
    let total = num2-num1; //formula
    let resultado;
    if(num1 % 2 !== 0 && num2 % 2 !== 0){
        resultado = Math.floor(total / 2);
    }else{
        resultado = Math.floor(total / 2)
    }

    return resultado

}

console.log(evenNum(1,100))

//Mañana hacer el otro metodo