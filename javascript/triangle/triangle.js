const Triangle = function(...sides) {
  this.sides = sides;

  this.kind = function() {
    if (this.sides.every(val => val === this.sides[0]) && this.sides[0] > 0) {
      return "equilateral";
    } else {
      this.sides.sort((a, b) => a - b);
      if (this.sides[2] < this.sides[0] + this.sides[1]) {
        if (
          this.sides[0] === this.sides[1] ||
          this.sides[1] === this.sides[2]
        ) {
          return "isosceles";
        } else {
          return "scalene";
        }
      } else {
        throw new Error("Illegal Triangle");
      }
    }
  };
};

export default Triangle;