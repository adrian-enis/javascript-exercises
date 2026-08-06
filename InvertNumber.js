{
  function invertedNum(num){
    let reverseNum = num.toString().split("").reverse().join("") 
    return parseInt(reverseNum)
  }
  console.log(invertedNum(123456)) //output 654321
  
}
//metodo 2
function invertNumber(num) {
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = (reversedNum * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum;

}

console.log(invertNumber(123456)) //output 654321
