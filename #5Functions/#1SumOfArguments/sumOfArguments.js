function sum(array) {
  if (Array.isArray(array)) {
    let total = 0;
    for (let value of array) total += value;

    return total;
  }

  let total = 0;
  for (let value of arguments) total += value;

  return total;
}

//Sum of Arguments
let sumOfArg = sum(1, 2, 4, 5);
console.log(sumOfArg);

//Sum of Array
let array = [1, 2, 3, 4, 5];
let sumOfArray = sum(array);
console.log(sumOfArray);
