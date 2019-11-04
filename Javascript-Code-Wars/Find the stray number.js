// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  numbersSet = {}
  
  numbers.forEach(number => {
    if (numbersSet[number] == undefined) {
      numbersSet[number] = 1
    } else {
      numbersSet[number] += 1
    }
  })
  
  for (let keyNumber in numbersSet) {
    if (numbersSet[keyNumber] == 1) {
      return parseInt(keyNumber)
    }
  }
}

// const stray = nums => nums.reduce((a, b) => a ^ b); 
// uses the bitwise XOR operator
// “Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. 
// Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.”
// these switches the bits
