const fs = require("fs");

const stepOne = (input) => {
  const targetValue = 2020;
  return input
    .filter((value, _, array) => {
      return value + array[array.indexOf(targetValue - value)] === targetValue;
    })
    .reduce((a, b) => a * b);
};

const stepTwo = (input) => {
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

const executeStepOne = () => stepOne(getInput());

const executeStepTwo = () => stepTwo(getInput());

module.exports = {
  stepOne,
  stepTwo,
  executeStepOne,
  executeStepTwo,
};
