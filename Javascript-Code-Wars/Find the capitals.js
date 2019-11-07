// Find the capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

// var capitals = function (word) {
//     return word.split('').reduce(function(memo, v, i) {
//       return v === v.toUpperCase() ? memo.concat(i) : memo;
//     }, []);
//   };