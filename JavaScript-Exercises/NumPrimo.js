//Crear una función que reciba un número y devuelva true si es primo y false si no lo es
{
  function isPrimo(num){
    if(num <= 1){
      return false
    }
    for(let i = 2; i < Math.sqrt(num); i++){
      if(num % i === 0){
        return false
      }
    }

    return true
  }

  console.log(isPrimo(7)) //output: True
}
