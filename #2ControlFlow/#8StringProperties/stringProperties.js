function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") {
      console.log(key, object[key]);
    }
  }
}

const car = {
  color: "black",
  wells: 4,
  model: "ferrari",
  engine: true,
};

showProperties(car);
