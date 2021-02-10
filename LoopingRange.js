const range = function (start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return [];
  } else {
    let arr = [];
    for (let ind = start; ind <= end; ind = ind + step) {
      arr.push(ind);
    }
    return arr;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));