const circule = {
  radius: 1,
  get area() {
    return this.radius * Math.PI * this.radius;
  },
};

circule.radius = 2;

console.log(circule.area);
