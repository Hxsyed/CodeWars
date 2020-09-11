function solution(number) {
  var sum = 0;
  for (var i = number - 1; i >= 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

solution(10);
// 23
