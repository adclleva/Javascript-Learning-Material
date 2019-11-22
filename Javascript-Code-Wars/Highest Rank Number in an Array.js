// Highest Rank Number in an Array
 
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    numObj = {}

    arr.sort((a, b) => b - a).forEach(num => {
        if (numObj[num] == undefined) {
            numObj[num] = 1 
        } else {
            numObj[num] += 1
        }
    })

    let count = 0
    let highestFreqNum = 0

    for (let num in numObj) {
        let currentCount = numObj[num]
         
        if (count <= currentCount) {
            count = currentCount
            highestFreqNum = num

        }
    }

    return highestFreqNum * 1
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(highestRank( [12, 10, 8, 12, 7, 6, 4, 10, 12]))
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))


// function highestRank(arr){
//     var obj = {};
//     arr.forEach(function(elem){
//        if(obj[elem] === undefined)
//          obj[elem] = 0;
//        obj[elem]++;
//     });
//     var keys = Object.keys(obj), highest = 0, key;
//     keys.forEach(function(elem){
//        if(obj[elem] >= highest)
//        {
//           highest = obj[elem];
//           key = elem;
//        }
//     })
//     return parseInt(key);
//   }
  