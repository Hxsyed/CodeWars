function rgb(r, g, e) {
  // complete this function
  let a = 0,
    b = 0,
    c = 0,
    d = 0;
  let str = "";
  a = Math.floor(r / 16);
  b = r % 16;
  if (a >= 0 || b >= 0) {
    c = val(a);
    d = val(b);
  }
  if (r > 255) {
    (c = "F"), (d = "F");
  }
  if (r < 0) {
    (c = "0"), (d = "0");
  }
  str += c;
  str += d;
  a = Math.floor(g / 16);
  b = g % 16;
  if (a >= 0 || b >= 0) {
    c = val(a);
    d = val(b);
  }
  if (g > 255) {
    (c = "F"), (d = "F");
  }
  if (g < 0) {
    (c = "0"), (d = "0");
  }
  str += c;
  str += d;
  a = Math.floor(e / 16);
  b = e % 16;
  if (a >= 0 || b >= 0) {
    (c = val(a)), (d = val(b));
  }
  if (e > 255) {
    (c = "F"), (d = "F");
  }
  if (e < 0) {
    (c = "0"), (d = "0");
  }
  str += c;
  str += d;
  console.log(str);
  return str;
}

function val(huh) {
  switch (huh) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    default:
      return huh;
  }
}

rgb(0, 0, 0);
// , '000000')
rgb(0, 0, -20);
// , '000000')
rgb(300, 255, 255);
// , 'FFFFFF')
rgb(173, 255, 47);
// , 'ADFF2F')
