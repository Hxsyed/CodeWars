// regex exex()

function inArray(array1, array2) {
  //...
  var resarr = [];
  for (let i = 0; i < array1.length; i++) {
    var patt = new RegExp(array1[i]);
    var res = patt.exec(array2);
    // console.log(res);
    if (res === null) {
      continue;
    }
    if (res[0] === array1[i]) {
      resarr.push(array1[i]);
    }
  }
  console.log(resarr);
  return resarr;
}

var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// for (var i = 0; i < a2[0].length; i++) {
//   console.log(a2[i]);
// }

var a1 = ["xyz", "live", "strong"];

inArray(a1, a2);
