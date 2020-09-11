function filter_list(l) {
  // Return a new array with the strings filtered out
  var resarr = [];
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      resarr.push(l[i]);
    }
  }
  console.log(resarr);
  return resarr;
}

filter_list([1, "a", "b", 0, 15]);
// [1, 0, 15])
