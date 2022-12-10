function isLandscape(width, height) {
  return width > height;
}

let landscape = isLandscape(100, 200);
console.log(landscape);
