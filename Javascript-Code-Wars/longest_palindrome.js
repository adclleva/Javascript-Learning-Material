// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// function longestPalindrome(string) {
//     return subStrings(string).
// }

function longestPalindrome(string) {
    let palindromeArr = subStrings(string).filter(word => isPalindrome(word)).map(word => word.length).sort((a, b) => b - a)

    return palindromeArr.length == 0 ? 0 : palindromeArr[0] 
}
console.log(longestPalindrome("baabcd"))

function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        let leftMost = word[i]
        let rightMost = word[word.length - 1 - i]
        
        if (leftMost != rightMost) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("aaaa"))

function subStrings(string) {
    subStrArr = []

    for (let i = 0; i < string.length; i++) {
        let subStr = string[i]
        subStrArr.push(subStr)

        for (let j = i + 1; j < string.length; j++) {
            subStr = subStr + string[j]
            subStrArr.push(subStr) 
        }
    }

    return subStrArr
}

console.log(subStrings("baabcd"))