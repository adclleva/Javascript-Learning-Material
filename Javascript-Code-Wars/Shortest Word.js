// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  stringLengths = s.split(" ").map(word => word.length)
  
  return Math.min(...stringLengths)
}

// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
// }