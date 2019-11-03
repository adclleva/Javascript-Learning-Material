function repeatStr (n, s) {
    newString = ""

    i = 0

    while (i < n) {
      newString += s

      i++
    }

    return newString
  }

  function repeatStr (n, s) {
    return s.repeat(n);
  }