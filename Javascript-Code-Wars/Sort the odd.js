// Sort the odd

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    // Return a sorted array.
    let oddOrderedArr = [...array].sort((a,b) => a-b).filter(num => num % 2 != 0)
    let evenArr = array.filter(num => num % 2 == 0)
    let sortedOddsOnlyArr = []
    
    for (let i = 0; i < array.length; i++) {
      let curNum = array[i]
      
      if (curNum % 2 == 0) {
        sortedOddsOnlyArr.push(evenArr.shift())
      } else {
        sortedOddsOnlyArr.push(oddOrderedArr.shift())
      }
    }
    
    return sortedOddsOnlyArr
  }

  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }