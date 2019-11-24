// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words){
//     if(words === ""){
//       return "";
//     }
//     var array = [];
//     words = words.split(" ");
//     var j = 1;

//     for(var i = 0; i<words.length; i++){
//       if(words[i].indexOf(j) > -1)
//       {
//        array.push(words[i]);
//         j++;
//         i = -1;
//       }
//     }
//     return array.join(" ");
//   }
//   console.log(order("in3to I1 5Hopper go2t Grace4"))
  

  // TODO do this in a while loop later this morning

const order = words => {
    let wordsArr = words.split(" ")
    let numPosition = 1
    let wordsOrdered = []
    let i = 0

    while (i < wordsArr.length) {
        word = wordsArr[i]

        if (word.indexOf(numPosition) != -1) {
            wordsOrdered.push(word)
            i = -1
            numPosition ++
        }

        i++
    } 

    return wordsOrdered.join(" ")
}

console.log(order("in3to I1 5Hopper go2t Grace4"))

// function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }   

//   function order(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//       for(j = 0; j < array.length; j++) {
//         if(array[j].indexOf(i) >= 0) {
//           sortedArray.push(array[j]);
//         }
//       }
//     }
//     return sortedArray.join(' ');
//   }