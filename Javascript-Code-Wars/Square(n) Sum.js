function squareSum(numbers){
    return numbers.length > 0 ?

      numbers.slice(1).reduce((accumNum, nextNum) => {
        return accumNum += Math.pow(nextNum, 2)
      }, Math.pow(numbers[0], 2))

      : 0
 }

//   console.log(squareSum([1,2]))
  console.log(squareSum([-9,-12])) // Expected: 225

//   function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }


// function squareSum(numbers){
//     return numbers.map(square).reduce(sum);
//   }

//   function square(number) {
//     return number * number;
//   }

//   function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
//   }
