const binaryArrayToNumber = (arr) => {
  // your code
  let sum = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      var num = Math.pow(2, count);
      sum += num;
      count++;
    } else count++;
  }
  return sum;
};

var lol = binaryArrayToNumber([1, 1, 1, 1]);
console.log(lol);
// , 15)
