// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    disctinctObj = {}
    dupCount = 0

    text.split("").forEach(char => {
        console.log(char.toLowerCase())
        if (!disctinctObj[char.toLowerCase()]) {
            disctinctObj[char.toLowerCase()] = 1
        } else {
            disctinctObj[char.toLowerCase()] += 1
        }
    })

    for (key in disctinctObj) {
        if (disctinctObj[key] > 1) {
            dupCount += 1
        }
    }
    return dupCount
  }

  console.log(duplicateCount("Indivisibility"))

//   function duplicateCount(text){
//     let res = {}, count = 0;
//     text.toLowerCase().split("").forEach(t=>{
//       res[t] = res[t] ? res[t] + 1 : 1;
//     });
//     for(let key in res) {
//       count += (res[key] > 1) ?  1: 0;
//     }
//     return count;
//   }

//   function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
//   }

//   function duplicateCount(text){
//     var lower = text.toLowerCase();
//     var count = 0;
//     var used = [];
    
//     lower.split('').forEach(function(letter) {
//       if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
//         count++;
//         used.push(letter);
//       }
//     });
    
//     return count;
//   }