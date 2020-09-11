function isValidWalk(walk) {
  //insert brilliant code here
  // base case
  if (walk.length > 10 || walk.length < 10) {
    return false;
  }
  let x = 0;
  let y = 0
  for (var i = 0; i < walk.length; i++) {
    if (walk[i] === "n" || walk[i] === "N" ||){
      x++;
    } else if (walk[i] === "s" || walk[i] === "S") {
      x--;;
    } else if (walk[i] === "E" || walk[i] === "e") {
        y++;;
    }
    else if (walk[i] === "W" || walk[i] === "w") {
    y--;;
}
  }
  if (x === 0 && y== 0) {
    return true;
  } else return false;
}

var lol = isValidWalk(["e", "w", "s", "w", "n", "s", "n", "s", "e", "w"]);
// , 'should return true');
// var lol = isValidWalk([
//   "w",
//   "e",
//   "w",
//   "e",
//   "w",
//   "e",
//   "w",
//   "e",
//   "w",
//   "e",
//   "w",
//   "e",
// ]);
console.log(lol);
