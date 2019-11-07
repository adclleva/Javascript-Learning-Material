// Maximum Length Difference

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return -1
    }
    console.log(a1)
    console.log(a2)
    console.log(a1.map(str => str.length))
    console.log(a2.map(str => str.length))
    longestLength1 = Math.max(...a1.map(str => str.length))
    longestLength2 = Math.max(...a2.map(str => str.length))
    shortestLength1 = Math.min(...a1.map(str => str.length))
    shortestLength2 = Math.min(...a2.map(str => str.length))

    console.log(longestLength1,longestLength2) 
    console.log(shortestLength1,shortestLength2)
    console.log(longestLength1 - shortestLength2) 
    console.log(longestLength2 - shortestLength1) 
    return Math.max(longestLength1 - shortestLength2, longestLength2 - shortestLength1)
}





function mxdiflg2(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    console.log(a1)
    console.log(a2)
    const length1 = a1.map(str => str.length)
    const length2 = a2.map(str => str.length)
    
    console.log(length1)
    console.log(length2)
    console.log(Math.max(...length1))
    console.log(Math.max(...length2))
    console.log(Math.min(...length1))
    console.log(Math.min(...length2))

    console.log(Math.max(...length1) - Math.min(...length2))
    console.log(Math.max(...length2) - Math.min(...length1))

    return Math.max(
      Math.max(...length1) - Math.min(...length2),
      Math.max(...length2) - Math.min(...length1)
    )
  }
  var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
  var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  var s3 = [ 'ejjjjmmtthh',
  'zxxuueeg',
  'aanlljrrrxx',
  'dqqqaaabbb',
  'oocccffuucccjjjkkkjyyyeehh' ]
  var s4 = [ 'bbbaaayddqbbrrrv' ]

  console.log(mxdiflg(s3, s4)) 

  console.log(mxdiflg2(s3,s4))

//   function mxdiflg(a1, a2) {
//     if (a1.length === 0 || a2.length === 0) return -1
//     let l1 = a1.map(str => str.length)
//     let l2 = a2.map(str => str.length)
//     return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
//   }