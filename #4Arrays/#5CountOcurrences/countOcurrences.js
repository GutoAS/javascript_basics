function occurences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

const array = [1, 2, 3, 1, 4, 1];

console.log(occurences(array, 2));
