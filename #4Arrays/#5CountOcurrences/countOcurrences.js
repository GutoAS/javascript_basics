function occurences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }

  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

try {
  const array = [1, 2, 3, 1, 4, 1];
  const occurence = occurences(array, 1);
  console.log(occurence);
} catch (e) {
  console.log(e.message);
}
