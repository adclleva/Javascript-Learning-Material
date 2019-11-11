// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                          // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                           // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

const persistence = num => {
    
    let numLength = num.toString().length

    console.log(numLength)

    let persistenceCount = 0
    
    let currentNum = num
    console.log(currentNum)

    while (numLength != 1) {
        let currentProduct = multiplicativePersistence(currentNum)
        numLength = currentProduct.toString().length

        currentNum = currentProduct
        persistenceCount++
    }
    // while (isSingleDigit == false) {
    //     let currentProduct = multiplicativePersistence(currentNum)
    //     console.log(currentNum)


    //     numLength = currentProduct.toString()

    //     currentNum = currentProduct

    //     if (numLength == 1) {
    //         isSingleDigit = true
    //     }

        
    //     persistenceCount++
    // }
    return persistenceCount
}

const multiplicativePersistence = num => {
    let product = 1

    num.toString(10).split("").forEach(num => {
        product *= num
    })

    return product
}

console.log(multiplicativePersistence(999))
console.log(persistence(39))

// function persistence(num) {
//     count = 0
    
//     num = num.toString()
    
//     while(num.length != 1) {
//       count++
      
//       num = num.split("").map(number => parseInt(number, 10)).reduce((a, b) => a * b).toString()
//     }
    
//     return count
//   }


 
