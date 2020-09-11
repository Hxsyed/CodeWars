function createPhoneNumber(numbers) {
  var a = numbers.slice(0, 3); // slice the first three digits
  var b = numbers.slice(3, 6);
  var c = numbers.slice(6, 10);
  console.log(a);
  //   console.log(b);
  //   console.log(c);
  var d = a.toString(); // turn into a string
  var e = b.toString();
  var f = c.toString();
  console.log(d);
  //   console.log(e);
  //   console.log(f);
  d = d.replace(/,/g, ""); // remove the commas
  e = e.replace(/,/g, "");
  f = f.replace(/,/g, "");
  console.log(d);
  //   console.log(e);
  //   console.log(f);
  var res = "(" + d + ") " + e + "-" + f;
  //   console.log(res);
  return res;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
//  "(123) 456-7890")
