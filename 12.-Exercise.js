/* Dado un numero, mostrar todos los numeros desde
ese hasta 0, de 8 en 8 en una lista con guiones y cada numero debe tener un n° */

function mostrarDe8en8(num){
    let resultado = "" ;

    for(let i = num; i >= 0; i -= 8){
        resultado += `- nº ${i}\n`
    }
    return resultado
}

console.log(mostrarDe8en8(100))