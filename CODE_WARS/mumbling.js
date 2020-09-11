function accum(s) {
  // your code
  let str = s[0] + "-";
  for (let i = 1; i < s.length; i++) {
    str += s[i].toUpperCase();
    for (let j = 0; j <= i - 1; j++) {
      str += s[i].toLowerCase();
    }
    str += "-";
  }
  str = str.substring(0, str.length - 1);
  return str;
}
