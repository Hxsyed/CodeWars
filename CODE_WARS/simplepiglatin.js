function pigIt(str) {
  //Code here
  let str1 = "";
  var res = str.split(" ");
  //   console.log(res[0][0]);
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "!" || res[i] === "?") {
      str1 += res[i];
      return str1;
    }
    let char = res[i][0]; // capital letter
    let sub = res[i].substring(1);
    str1 += sub + char + "ay" + " ";
  }
  str1 = str1.substring(0, str1.length - 1);
  console.log(str1);
  return str1;
}

pigIt("Pig latin is cool");
// , 'igPay atinlay siay oolcay')
pigIt("This is my string");
// , 'hisTay siay ymay tringsay')
