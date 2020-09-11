function highAndLow(numbers) {
  // ...
  numbers = numbers.split(" ");
  console.log(numbers);
  numbers = numbers.filter(function (str) {
    return /\S/.test(str);
  });
  // numbers = numbers.split("").join("").split("");
  console.log(numbers);
  var max = Math.max(...numbers);
  var min = Math.min(...numbers);
  console.log(max);
  console.log(min);
  var str = max.toString() + min.toString();
  console.log(str);
  return str;
}
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // return "542 -214";

// console.log(Math.max(1, 2, 3, 4)); // 4
// console.log(Math.min(1, 2, 3, 4)); // 1.
