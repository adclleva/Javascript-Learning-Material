// Mine

Math.round = function(number) {
  console.log(number)
  // TODO: fix this
  if (number === 0) {
    return 0;
  }

  let numStr = number.toString();
  let numArr = numStr.split(".");
  let num1 = parseInt(numArr[0]);

  if (numArr.length > 1) {    
    var num2 = parseInt(numArr[1][0]);
  }

  if (numArr.length < 2) {
    console.log("1")
    return num1;
  }
  
  if (num2 >= 5) {
    console.log("2")
    return num1 + 1;
  } else {
    console.log("3")
    return num1;
  }
};

Math.ceil = function(number) {
  // TODO: fix this
  let numStr = number.toString();
  let numArr = numStr.split(".");
  let num = parseInt(numArr[0]);
  
  if (numArr.length > 1) {
    return num + 1;
  } else {
    return num;
  }
};

Math.floor = function(number) {
  // TODO: fix this
  let numStr = number.toString();
  let numArr = numStr.split(".");
  let num = parseInt(numArr[0]);

  return num;
};


console.log(Math.round(31.000000001));
console.log(Math.round

// Best Practice

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};