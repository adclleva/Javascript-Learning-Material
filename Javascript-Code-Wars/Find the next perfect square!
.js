function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    currentSqrt = Math.sqrt(sq)

    if (currentSqrt % 1 == 0) {
      nextSquare = Math.pow(currentSqrt + 1, 2)
      return nextSquare
    } else {
      return -1;
    }
  }

function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}