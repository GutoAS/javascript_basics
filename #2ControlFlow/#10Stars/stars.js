function showStars(rows) {
  let sum = "";

  for (let i = 1; i <= rows; i++) {
    sum += "*";
    console.log(sum);
  }
}
showStars(1000);
