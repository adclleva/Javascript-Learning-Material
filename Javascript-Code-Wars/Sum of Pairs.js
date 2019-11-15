// Sum of Pairs

// Given a list of integers and a single sum value, 
// return the first two values (parse from the left please)
//  in order of appearance that add up to form the sum.

const sum_pairs = (ints, s) => {
    let pastNums = new Set([]);

    for (let i = 0; i < ints.length; i++) {
        let curNum = ints[i]
        let pastNum = s - curNum

        if(pastNums.has(pastNum)) {
            return [pastNum, curNum]
        }
        pastNums.add(curNum)
    }

    return undefined
}

// var sum_pairs=function(ints, s){
//     if (ints.length < 2) return undefined; //not enough numbers for pair.
//     let intSet = new Set()
//     intSet.add(ints[0]);
//     for (let i=1; i < ints.length; ++i){
//       let needed = s-ints[i];
//       console.log([needed, s, ints[i]])
//       console.log(intSet.has(needed))
//       if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
//         return [needed,ints[i]];
//       }
//       intSet.add(ints[i]);//if not insert the number in set and continue.
//     }
//     return undefined;//No answer found
//   }

// var sum_pairs=function(ints, s){
//     var seen = {}
//     for (var i = 0; i < ints.length; ++i) {
//       if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
//       seen[ints[i]] = true
//     }
//   }

console.log(sum_pairs([ 10, 5, 2, 5, 3, 7, 5 ] ,10))
console.log([ 10, 5, 2, 3, 7, 5 ] ,10)
console.log([ 5, 5 ])