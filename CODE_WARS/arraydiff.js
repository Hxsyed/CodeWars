function arrayDiff(a, b) {
  //   //   for(var i = 0; i<a.length; i++){
  //   //     for(var j = 0; j<b.length; j++){

  //   //     }
  //   //   }
  //   // base case
  //   if (b.length < 1) {
  //     return a;
  //   }
  //   let resarr = [];
  //   let huh = false;
  //   for (var i = 0; i < a.length; i++) {
  //     for (var j = 0; j < b.length; j++) {
  //       if (a[i] === b[j]) {
  //         huh = true;
  //       }
  //     }
  //     if (huh === false) {
  //       resarr.push(a[i]);
  //     }
  //   }
  //   console.log(resarr);
  //   return resarr;
  //   //   for (var i = 0; i < a.length; i++) {
  //   //     if (b.includes(a[i]) === false) {
  //   //       resarr.push(a[i]);
  //   //     }
  //   //     console.log(resarr);
  //   //     return resarr;
  //   //   }
  let difference = a.filter((x) => !b.includes(x));
  console.log(difference);
  return difference;
}

// arrayDiff([3, 4], [3]);
// , [4],
// arrayDiff([1, 8, 2], []);
// , [1, 8, 2],
arrayDiff(
  [12, 13, -12, 11, 10, 3, 13, -2, 6, 19, 18, 9, -4, -16, 19, -10, -9, 17, -9],
  [-9, 18, 11, -4, 9, 10, 19, -16, 13, 6, -2, -9, -10, 17, 19]
);
