function iqTest(numbers) {
  // ...
  var res = numbers.split(" ");
  var countEven = 0;
  var countOdd = 0;
  //   console.log(res);
  for (var i = 0; i < res.length; i++) {
    if (res[i] % 2 === 0) {
      countEven++;
    } else countOdd++;
  }
  if (countEven > countOdd) {
    for (var i = 0; i < res.length; i++) {
      if (res[i] % 2 === 1) {
        return i + 1;
      }
    }
  } else {
    for (let i = 0; i < res.length; i++) {
      if (res[i] % 2 === 0) {
        return i + 1;
      }
    }
  }
  //   console.log(countOdd);
  //   console.log(countEven);
}

var a = iqTest("2 4 7 8 10");
console.log(a);
// , 3;
var b = iqTest("1 2 2");
console.log(b);
// , 1;
