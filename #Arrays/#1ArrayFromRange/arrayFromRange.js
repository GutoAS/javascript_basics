function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);

  return output;
}

const number = arrayFromRange(-1, 3);

console.log(number);
