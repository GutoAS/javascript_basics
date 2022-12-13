const array = [1, 2, 3, 4, 5];

function except(array, excluded) {
  let output = [];
  for (let value of array) {
    if (!excluded.includes(value)) {
      output.push(value);
    }
  }
  return output;
}

console.log(except(array, [2, 4]));
