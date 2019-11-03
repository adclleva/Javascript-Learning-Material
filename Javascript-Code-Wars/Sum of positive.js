function positiveSum(arr) {
    sum = 0

    arr.forEach(num => {
        num > 0 ? sum += num : sum += 0
    })

    return sum
}

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }