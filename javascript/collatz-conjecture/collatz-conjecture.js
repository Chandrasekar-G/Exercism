export const steps = function(input) {
  let noOfSteps = 0;
  if (input < 1) {
    throw new Error("Only positive numbers are allowed");
  }
  while (input > 1) {
    if (input % 2 === 0) {
      input = input / 2;
    } else {
      input = 3 * input + 1;
    }
    noOfSteps++;
  }
  return noOfSteps;
};
