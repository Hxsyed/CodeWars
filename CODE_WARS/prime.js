function isPrime(num) {
  //TODO
  // basic
  if (num < 2) {
    return false;
  }
  // var count = 0;
  // for (var i = 1; i <= num; i++) {
  //     if (num % i === 0) {
  //         count++
  //     }
  //     if (count > 2) {
  //         return false
  //     }
  // }
  // return true
  if (num - (1 % 1) === 0 && num - (1 % num) - 1 === 0) {
    return true;
  }
}

isPrime(73);
