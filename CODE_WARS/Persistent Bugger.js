function persistence(num) {
  //code me
  let mul = 1;
  let count = 0;
  if (num < 10) {
    return count;
  }
  while (num > 0) {
    mul *= num % 10;
    num = Math.floor(num / 10);
  }
  count++;
  return count + persistence(mul);
}
