// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// function sumOfDifferences(arr) {
//     if (arr.length <= 1) {
//       return 0
//     }
//     orderedArr = arr.sort( (a, b) => {
//       return b - a
//     })
    
//     sumDiff = 0
    
//     for (i = 0; i < orderedArr.length - 1; i++) {
//       curNum = orderedArr[i]
//       nextNum = orderedArr[i + 1]
      
//       sets = curNum - nextNum
      
//       sumDiff += sets

//       console.log(sets)
//       console.log(sumDiff)
//     }
    
//     return sumDiff
//   }



function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

console.log( sumOfDifferences([1, 2, 10]))
