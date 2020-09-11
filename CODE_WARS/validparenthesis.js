function validParentheses(parens) {
  //TODO
  //   let a = 0;
  //   let b = 0;
  //   for (let i = 0; i < parens.length; i++) {
  //     if (parens[i] === "(") {
  //       a++;
  //     } else b++;
  //   }
  //   console.log(parens, a, b);
  //   if (a === b) {
  //     return true;
  //   }
  //   return false;
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      for (let j = i + 1; j < parens.length; j++) {
        if (parens[j] === ")") {
          break;
        } else return false;
      }
    } else if (parens[i] === ")") {
      count++;
      continue;
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
}

validParentheses("()");
//  true);
validParentheses("())");
// , false);
