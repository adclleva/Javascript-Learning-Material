// What's a Perfect Power anyway?
// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });

var isPP = function(n){

    for (i = 2; i * i < n; i++) {
        for (j = 2; Math.pow(i, j) < n; j++) {
            let currentResult = Math.pow(i, j)
            if (currentResult == n) {
                return [i, j]
            }

        }
    }
    return null
}

// function isPP(n) {
//     for (var m = 2; m * m <= n; ++ m)
//       for (var k = 2; Math.pow(m, k) <= n; ++ k)
//         if (Math.pow(m, k) == n) return [m, k];
//     return null;
//   }

//   var isPP = function(n){
//     for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
//       var k = Math.round(Math.log(n) / Math.log(m))
//       if (Math.pow(m, k) == n) return [m, k];
//     }
//     return null;
//   }

/* utilizing the Math.log function will not work because of the floating point 
var isPP = function(n){

    for (i = 2; i < n; i++) {
       result = getExponentLog(i, n)
       pairFound = result % 1 == 0
       console.log(pairFound)
       console.log(Math.round(result))

       if (pairFound) {
           return pairFound
       }
    }

    return pairFound
}

function getExponentLog(base, result) {
    return Math.log(result) / Math.log(base)
}

console.log(getExponentLog(10,10))

// console.log(isPP(4))
console.log(isPP(9))
// console.log(isPP(8))
console.log(getExponentLog(5,25) % 1 == 0)
*/