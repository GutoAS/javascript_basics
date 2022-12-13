function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

const array = [1, 10, 1, 2, 3, 99];

console.log(getMax(array));
