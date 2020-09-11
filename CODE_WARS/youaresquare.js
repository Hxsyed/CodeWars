var isSquare = function (n) {
  let value = Math.sqrt(n);
  if (Number.isInteger(value)) {
    return true;
  } else return false; // fix me
};
var lol = isSquare(3);
console.log(lol);
