function primeNumbers(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    // console.log(number);
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        // console.log(factor);
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

primeNumbers(10);
