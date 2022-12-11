function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  return count;
}

const numbers = [0, 1, 2, 3];

console.log(countTruthy(numbers));
