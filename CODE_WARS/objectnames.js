function list(names) {
  //your code here
  if (names.length < 1) {
    return "";
  }
  var resarr = [];
  for (var i = 0; i < names.length; i++) {
    for (var keys in names[i]) {
      resarr.push(names[i][keys]);
    }
  }
  if (names.length === 1) {
    resarr = resarr.toString();
    return resarr;
  }
  var char = resarr[resarr.length - 2] + " & " + resarr[resarr.length - 1];
  console.log(char);
  resarr.pop();
  resarr.pop();
  resarr.push(char);
  resarr = resarr.toString();
  resarr = resarr.replace(/,/g, ", ");
  console.log(resarr);
  return resarr;
}

var lol = list([{ name: "Bart" }, { name: "Lisa" }]);
console.log(lol);
// 'Bart, Lisa & Maggie'
// , { name: "Lisa" }, { name: "Maggie" }
