// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
//     2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
function wave(string){
    waveArr = []
    
    string.split("").forEach((char, index) => {
        if (index == 0 && char != " ") {
            waveArr.push(char.toUpperCase() + string.slice(index + 1))
        } else if (index == string.length - 1 && char != " "){
            waveArr.push(string.slice(0,-1) + char.toUpperCase())
        } else if (char != " "){
            waveArr.push(string.slice(0,index) + char.toUpperCase() + string.slice(index + 1) )
        }
    })

    return waveArr
}

console.log(wave("two words"))

// function wave(str){
//     let result = [];
    
//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });
    
//     return result;
// }