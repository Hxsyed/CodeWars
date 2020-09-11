var sum_pairs = function (ints, s) {
  //your code here
  var resarr = [];
  var prevcount = Number.MAX_VALUE;
  var count = 0;
  var firstElement;
  var secondElement;
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s && prevcount > count) {
        firstElement = ints[i];
        secondElement = ints[j];
        prevcount = count;
      } else count++;
    }
    count = 0;
  }
  if (firstElement === undefined || secondElement === undefined) {
    return undefined;
  }
  resarr.push(firstElement, secondElement);
  console.log(resarr);
  return resarr;
};

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l5 = [10, 5, 2, 3, 7, 5];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

sum_pairs(l1, 8);
//  + "" == [1, 7] + "", "Basic: [" + l1 + "] should return [1, 7] for sum = 8");
sum_pairs(l2, -6);
// ) + "" == [0, -6] + "", "Negatives: [" + l2 + "] should return [0, -6] for sum = -6");
sum_pairs(l3, -7);
// ) == undefined, "No Match: [" + l3 + "] should return undefined for sum = -7");
sum_pairs(l4, 2);
//  + "" == [1, 1] + "", "First Match From Left: [" + l4 + "] should return [1, 1] for sum = 2 ");
sum_pairs(l5, 10);
// ) + "" == [3, 7] + "", "First Match From Left REDUX!: [" + l5 + "] should return [3, 7] for sum = 10 ");
sum_pairs(l6, 8);
//  + "" == [4, 4] + "", "Duplicates: [" + l6 + "] should return [4, 4] for sum = 8");
sum_pairs(l7, 0);
//  + "" == [0, 0] + "", "Zeroes: [" + l7 + "] should return [0, 0] for sum = 0");
sum_pairs(l8, 10);
// ) + "" == [13, -3] + "", "Subtraction: [" + l8 + "] should return [13, -3] for sum = 10");
// });
