// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
    return parseInt(n.toString(10).split("")
    .sort((a, b) => b-a).join(""),10) // decimal 
  }
  
// the second parameter in parseInt is the radix so:
// 10 is decimal and 16 is hexidecimal
// the default is 10 when ES5 arrived
  console.log(descendingOrder(3218964)) 