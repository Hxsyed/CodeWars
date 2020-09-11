var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  // var res = iterable.split(""); // turn into array
  // console.log(res);
  // var set = new Set(res); // turn into a set
  // console.log(set);
  var resarr = [];
  // for (var i = 0; i < iterable.length; i++) {
  //   resarr.push(iterable[i]);
  //   for (var j = i + 1; j < iterable.length; j++) {
  //     if (resarr.includes(iterable[j])) {
  //       continue;
  //     }
  //     if (iterable[i] !== iterable[j]) {
  //       resarr.push(iterable[j]);
  //     }
  //   }
  // }
  if (iterable.length < 1) {
    return [];
  }
  resarr.push(iterable[0]);
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i + 1] === undefined) {
      break;
    }
    if (iterable[i] != iterable[i + 1]) {
      resarr.push(iterable[i + 1]);
    }
  }
  console.log(resarr);
  return resarr;
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder("ABBCcAD");
// , ['A', 'B', 'C', 'D', 'A', 'B'])
