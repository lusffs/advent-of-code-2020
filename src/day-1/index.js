const fs = require("fs");

const partOne = (input) => {
  const targetValue = 2020;
  return input
    .filter((value, _, array) => {
      return value + array[array.indexOf(targetValue - value)] === targetValue;
    })
    .reduce((a, b) => a * b);
};

const partTwo = (input) => {
  const targetValue = 2020;
  const sortedInput = input.sort((a, b) => a - b);

  for (let i = 0; i < sortedInput.length - 2; i++) {
    for (let j = i + 1; j < sortedInput.length - 1; j++) {
      for (let k = j + 1; k < sortedInput.length; k++) {
        if (sortedInput[i] + sortedInput[j] + sortedInput[k] === targetValue) {
          return sortedInput[i] * sortedInput[j] * sortedInput[k];
        }
      }
    }
  }

  return 0;
};

const getInput = () =>
  fs
    .readFileSync("./src/day-1/input.txt")
    .toString()
    .split("\n")
    .map((value) => {
      return parseInt(value);
    });

module.exports = {
  partOne,
  partTwo,
  executePartOne: () => partOne(getInput()),
  executePartTwo: () => partTwo(getInput()),
};
