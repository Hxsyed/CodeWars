function findOdd(A) {
  //happy coding!
  let count = 0,
    res = [];
  for (let i = 0; i < A.length; i++) {
    if (res.includes(A[i]) === true) continue;
    res.push(A[i]);
    for (let j = i; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if (count % 2 === 1) {
      return A[i];
    }
    count = 0;
  }
}
